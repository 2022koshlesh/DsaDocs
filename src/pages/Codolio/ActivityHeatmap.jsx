'use client';
import React, { useState, useMemo } from 'react';
import { format, parseISO, subYears, eachDayOfInterval, getDay, isEqual, addDays } from 'date-fns';

export default function ActivityHeatmap({ profileData }) {
  const [hoveredDay, setHoveredDay] = useState(null);

  // Platform extraction and merging logic (unchanged)...
  const leetcodePlatform = profileData?.platformProfiles?.platformProfiles?.find(
    profile => profile.platform === 'leetcode'
  );
  const geeksforgeeksPlatform = profileData?.platformProfiles?.platformProfiles?.find(
    profile => profile.platform === 'geeksforgeeks'
  );
  const codeforcesPlatform = profileData?.platformProfiles?.platformProfiles?.find(
    profile => profile.platform === 'codeforces'
  );
  const codechefPlatform = profileData?.platformProfiles?.platformProfiles?.find(
    profile => profile.platform === 'codechef'
  );

  const leetCodeCalendar = leetcodePlatform?.dailyActivityStatsResponse?.submissionCalendar || {};
  const geeksForGeeksCalendar = geeksforgeeksPlatform?.dailyActivityStatsResponse?.submissionCalendar || {};
  const codeForceCalendar = codeforcesPlatform?.dailyActivityStatsResponse?.submissionCalendar || {};
  const codeChefCalendar = codechefPlatform?.dailyActivityStatsResponse?.submissionCalendar || {};

  const mergedCalendar = {};

  const mergeCalendars = (calendar) => {
    Object.entries(calendar).forEach(([timestamp, count]) => {
      const date = format(fromUnixTime(Number(timestamp)), 'yyyy-MM-dd');
      mergedCalendar[date] = (mergedCalendar[date] || 0) + Number(count);
    });
  };

  const fromUnixTime = (unixTime) => new Date(unixTime * 1000);

  [leetCodeCalendar, geeksForGeeksCalendar, codeForceCalendar, codeChefCalendar].forEach(mergeCalendars);

  const today = new Date();
  const yearAgo = subYears(today, 1);
  const datesInterval = eachDayOfInterval({ start: yearAgo, end: today });

  const { totalSubmissions, longestStreak } = useMemo(() => {
    let total = 0;
    let currentStreak = 0;
    let maxStreak = 0;
    const activeDates = Object.keys(mergedCalendar)
      .filter(dateStr => mergedCalendar[dateStr] > 0)
      .sort()
      .map(dateStr => parseISO(dateStr));

    Object.values(mergedCalendar).forEach(count => total += count);

    if (activeDates.length > 0) {
      maxStreak = currentStreak = 1;
      for (let i = 1; i < activeDates.length; i++) {
        const prevDate = activeDates[i - 1];
        const nextDate = addDays(prevDate, 1);
        if (isEqual(nextDate, activeDates[i])) currentStreak++;
        else {
          maxStreak = Math.max(maxStreak, currentStreak);
          currentStreak = 1;
        }
      }
      maxStreak = Math.max(maxStreak, currentStreak);
    }

    return { totalSubmissions: total, longestStreak: maxStreak };
  }, [mergedCalendar]);

  const weeks = [];
  let currentWeek = [];
  let currentMonth = null;
  const firstDay = datesInterval[0];
  const firstDayOfWeek = getDay(firstDay);
  for (let i = 0; i < firstDayOfWeek; i++) currentWeek.push(null);

  datesInterval.forEach(date => {
    const dayOfWeek = getDay(date);
    const month = format(date, 'MM');

    if (currentMonth !== month && currentMonth !== null)
      weeks.push('MONTH_BREAK');
    currentMonth = month;
    currentWeek.push(date);
    if (dayOfWeek === 6) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  if (currentWeek.length > 0) weeks.push(currentWeek);

  const getCellColor = (date) => {
    if (!date) return 'cell-empty';
    const dateStr = format(date, 'yyyy-MM-dd');
    const count = mergedCalendar[dateStr] || 0;
    if (count === 0) return 'cell-0';
    if (count < 3) return 'cell-1';
    if (count < 5) return 'cell-2';
    if (count < 8) return 'cell-3';
    if (count < 10) return 'cell-4';
    return 'cell-5';
  };

  const getTooltipText = (date) => {
    if (!date) return '';
    const dateStr = format(date, 'yyyy-MM-dd');
    const count = mergedCalendar[dateStr] || 0;
    const formattedDate = format(date, 'MMM d, yyyy');
    return `${count} submissions on ${formattedDate}`;
  };

  return (
    <div className="heatmap-container">
      <div className="stats-bar">
        <div>
          <h3>Total Submissions</h3>
          <p>{totalSubmissions}</p>
        </div>
        <div>
          <h3>Longest Streak</h3>
          <p>{longestStreak} days</p>
        </div>
      </div>

      <div className="grid-row">
        <div className="labels">
          <div>Mon</div><div>Wed</div><div>Fri</div>
        </div>
        <div className="grid-scroll">
          <div className="grid">
            {weeks.map((week, weekIndex) => {
              if (!Array.isArray(week)) return null;
              return (
                <div className="week" key={weekIndex}>
                  {week.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`cell ${getCellColor(day)}`}
                      title={getTooltipText(day)}
                      onMouseEnter={() =>
                        setHoveredDay(day ? format(day, 'yyyy-MM-dd') : null)
                      }
                      onMouseLeave={() => setHoveredDay(null)}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="legend">
        <span>Less</span>
        <div className="cell cell-1" />
        <div className="cell cell-2" />
        <div className="cell cell-3" />
        <div className="cell cell-4" />
        <div className="cell cell-5" />
        <span>More</span>
      </div>

      <style>{`
        .heatmap-container {
          padding: 20px;
          background: #1f1f1f;
          border: 1px solid #333;
          border-radius: 10px;
          color: white;
          margin-bottom: 2rem;
        }
        .stats-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          border-bottom: 1px solid #444;
          padding-bottom: 10px;
        }
        .stats-bar h3 {
          font-size: 12px;
          color: #aaa;
        }
        .stats-bar p {
          font-size: 20px;
          font-weight: bold;
          margin: 0;
        }
        .grid-row {
          display: flex;
        }
        .labels {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-right: 10px;
          font-size: 10px;
          color: #aaa;
        }
        .grid-scroll {
          overflow-x: auto;
          width: 100%;
        }
        .grid {
          display: flex;
        }
        .week {
          display: flex;
          flex-direction: column;
        }
        .cell {
          width: 12px;
          height: 12px;
          margin: 2px;
          border-radius: 2px;
        }
        .cell-0 { background-color: #1f2937; }
        .cell-1 { background-color: #065f46; }
        .cell-2 { background-color: #047857; }
        .cell-3 { background-color: #059669; }
        .cell-4 { background-color: #10b981; }
        .cell-5 { background-color: #34d399; }
        .legend {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          font-size: 10px;
          margin-top: 10px;
          color: #aaa;
        }
        .legend span {
          margin: 0 5px;
        }
      `}</style>
    </div>
  );
}
