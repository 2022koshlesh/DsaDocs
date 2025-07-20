import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, AreaChart } from 'recharts';
import { TrendingUp, } from 'lucide-react';

export default function RatingHistory({ profileData, platform = 'all' }) {
  // Extract all platform profiles
  const { platformProfiles } = profileData.platformProfiles || {};
  
  // Find specific platform profiles
  const leetcodeProfile = platformProfiles?.find(profile => profile.platform === 'leetcode');
  const codeforcesProfile = platformProfiles?.find(profile => profile.platform === 'codeforces');
  const codechefProfile = platformProfiles?.find(profile => profile.platform === 'codechef');
  const geeksforgeeksProfile = platformProfiles?.find(profile => profile.platform === 'geeksforgeeks');

  // Determine which platform to display based on the platform prop
  const selectedProfile = platform !== 'all'
    ? platformProfiles?.find(profile => profile.platform === platform)
    : null;

  // Get rating data and stats based on platform
  const getRatingData = (platformProfile, platformName) => {
    if (!platformProfile) return { chartData: [], stats: {} };
    
    let contestData = [];
    let currentRating = 0;
    let maxRating = 0;
    let rank = 'N/A';
    let lastContestDate = 'N/A';
    let lastContestName = 'N/A';
    
    switch (platformName) {
      case 'leetcode':
        contestData = platformProfile.contestActivityStats?.contestActivityList || [];
        currentRating = platformProfile.userStats?.currentRating || 0;
        maxRating = platformProfile.userStats?.maxRating || 0;
        rank = platformProfile.userStats?.rank || platformProfile.userStats?.maxRank || 'N/A';
        break;
        
      case 'codeforces':
        contestData = platformProfile.contestActivityStats?.contestActivityList || [];
        currentRating = platformProfile.userStats?.currentRating || 0;
        maxRating = platformProfile.userStats?.maxRating || 0;
        rank = platformProfile.userStats?.rank || platformProfile.userStats?.maxRank || 'N/A';
        break;

        
      case 'codechef':
        contestData = platformProfile.contestActivityStats?.contestActivityList || [];
        currentRating = platformProfile.userStats?.currentRating || 0;
        maxRating = platformProfile.userStats?.maxRating || 0;
        rank = platformProfile.userStats?.rank || platformProfile.userStats?.maxRank || 'N/A';
        break;
        
      case 'geeksforgeeks':
        contestData = platformProfile.contestActivityStats?.contestActivityList || [];
        currentRating = platformProfile.userStats?.currentRating || 0;
        maxRating = platformProfile.userStats?.maxRating || 0;
        rank = platformProfile.userStats?.rank || platformProfile.userStats?.maxRank || 'N/A';
        break;
    }
    
    // Format contest data into chart format
    const chartData = formatContestData(contestData, platformName);
    
    // Get last contest info
    if (contestData.length > 0) {
      const lastContest = contestData[contestData.length - 1];
      const timestamp = getTimestamp(lastContest, platformName);
      lastContestDate = new Date(timestamp).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
      lastContestName = getContestName(lastContest, platformName);
    }
    
    return {
      chartData,
      stats: {
        currentRating,
        maxRating,
        rank,
        lastContestDate,
        lastContestName
      }
    };
  };
  
  // Helper functions for different platform data formats
  const getTimestamp = (contest, platform) => {
    switch (platform) {
      case 'leetcode':
        return contest.contestDate * 1000;
      case 'codeforces':
        return contest.ratingUpdateTimeSeconds * 1000;
      case 'codechef':
      case 'geeksforgeeks':
      default:
        return contest.date || contest.timestamp || Date.now();
    }
  };
  
  const getContestName = (contest, platform) => {
    switch (platform) {
      case 'leetcode':
        return contest.contestName;
      case 'codeforces':
        return contest.contestName || `Contest #${contest.contestId}`;
      case 'codechef':
      case 'geeksforgeeks':
      default:
        return contest.name || contest.contestName || 'Contest';
    }
  };
  
  const getRatingValue = (contest, platform) => {
    switch (platform) {
      case 'leetcode':
        return contest.rating;
      case 'codeforces':
        return contest.newRating;
      case 'codechef':
      case 'geeksforgeeks':
      default:
        return contest.rating || contest.newRating || 0;
    }
  };
  
  // Format contest data for chart based on platform
  const formatContestData = (contestData, platform) => {
    return contestData.map(contest => {
      const timestamp = getTimestamp(contest, platform);
      const date = new Date(timestamp);
      
      return {
        name: getContestName(contest, platform).replace(/Weekly Contest|Biweekly Contest|Div\.\s*[0-9]/g, '').trim(),
        rating: getRatingValue(contest, platform),
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        platform: platform,
        // Include full date for sorting
        fullDate: date
      };
    });
  };
  
  // Get data for all platforms or selected platform
  let chartData = [];
  let currentRating = 0;

  let activePlatform = platform;
  
  if (selectedProfile) {
    // Single platform view
    const platformData = getRatingData(selectedProfile, platform);
    chartData = platformData.chartData;
    currentRating = platformData.stats.currentRating;
  } else {
    // All platforms view or default to LeetCode if available
    const platformsToShow = [];
    
    if (leetcodeProfile) platformsToShow.push({ profile: leetcodeProfile, name: 'leetcode' });
    if (codeforcesProfile) platformsToShow.push({ profile: codeforcesProfile, name: 'codeforces' });
    if (codechefProfile) platformsToShow.push({ profile: codechefProfile, name: 'codechef' });
    if (geeksforgeeksProfile) platformsToShow.push({ profile: geeksforgeeksProfile, name: 'geeksforgeeks' });
    
    if (platformsToShow.length > 0 && platform === 'all') {
      activePlatform = platformsToShow[0].name;
    }
    
    platformsToShow.forEach(({ profile, name }) => {
      const platformData = getRatingData(profile, name);
      chartData = [...chartData, ...platformData.chartData];
      
      // Set stats from active platform
      if (name === activePlatform) {
        currentRating = platformData.stats.currentRating;
        maxRating = platformData.stats.maxRating;
        rank = platformData.stats.rank;
        lastContestDate = platformData.stats.lastContestDate;
        lastContestName = platformData.stats.lastContestName;
      }
    });
    
    // Sort data by date
    chartData.sort((a, b) => a.fullDate - b.fullDate);
  }
  
  // Define platform colors
  const platformColors = {
    leetcode: '#ffa726',
    codeforces: '#42a5f5',
    codechef: '#66bb6a',
    geeksforgeeks: '#5e35b1'
  };
  
  // Get unique platforms in chart data
  const uniquePlatforms = [...new Set(chartData.map(item => item.platform))];

  // Calculate rating change
  const ratingChange = chartData.length > 1 ? currentRating - chartData[0].rating : 0;
  const isPositive = ratingChange > 0;

  return (
  <div className="rating-history-container">
    {/* Compact Header */}
    <div className="rating-header">
      <div className="rating-header-left">
        <div className="icon-box">
          <TrendingUp size={24} className="icon" />
        </div>
        <div>
          <h2 className="rating-title">Rating Progress</h2>
          <p className="platform-name">{activePlatform} Performance</p>
        </div>
      </div>

      <div className="rating-header-right">
        <div className="current-rating">{currentRating}</div>
        <div className="rating-change">
          <span className="change-label">Change:</span>
          <span className={isPositive ? "change-positive" : "change-negative"}>
            {isPositive ? '+' : ''}{ratingChange}
          </span>
        </div>
      </div>
    </div>

    {/* Chart */}
    <div className="chart-wrapper">
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <defs>
              {uniquePlatforms.map(plt => (
                <linearGradient key={`gradient-${plt}`} id={`gradient-${plt}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={platformColors[plt]} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={platformColors[plt]} stopOpacity={0.1} />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis
              dataKey="date"
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              tickLine={{ stroke: '#6B7280' }}
              axisLine={{ stroke: '#6B7280' }}
            />
            <YAxis
              domain={['dataMin - 50', 'dataMax + 50']}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              tickLine={{ stroke: '#6B7280' }}
              axisLine={{ stroke: '#6B7280' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
              }}
              labelStyle={{ color: '#F3F4F6' }}
            />
            {uniquePlatforms.length > 1 && (
              <Legend
                wrapperStyle={{ bottom: -5 }}
                formatter={(value) => <span style={{ color: '#D1D5DB' }}>{value}</span>}
              />
            )}
            {uniquePlatforms.map(plt => (
              <Area
                key={plt}
                type="monotone"
                dataKey="rating"
                data={chartData.filter(item => item.platform === plt)}
                name={plt.charAt(0).toUpperCase() + plt.slice(1)}
                stroke={platformColors[plt] || '#6B7280'}
                fill={`url(#gradient-${plt})`}
                activeDot={{ r: 6, fill: '#fff', stroke: platformColors[plt], strokeWidth: 2 }}
                strokeWidth={2}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>

    <style>{`
      .rating-history-container {
        background-color: #1f1f1f;
        border-radius: 16px;
        padding: 24px;
        border: 1px solid rgba(128, 128, 128, 0.3);
        backdrop-filter: blur(4px);
        color: #fff;
        margin-top: 20px;
      }

      .rating-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
      }

      .rating-header-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .icon-box {
        background: linear-gradient(to bottom right, #6366f1, #8b5cf6);
        padding: 12px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .icon {
        color: white;
      }

      .rating-title {
        font-size: 20px;
        font-weight: bold;
        margin: 0;
      }

      .platform-name {
        font-size: 14px;
        color: #9ca3af;
        margin: 0;
        text-transform: capitalize;
      }

      .rating-header-right {
        text-align: right;
      }

      .current-rating {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 4px;
      }

      .rating-change {
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 4px;
      }

      .change-label {
        color: #9ca3af;
      }

      .change-positive {
        font-weight: 600;
        color: #4ade80; /* green */
      }

      .change-negative {
        font-weight: 600;
        color: #f87171; /* red */
      }

      .chart-wrapper {
        background-color: rgba(75, 85, 99, 0.2);
        border-radius: 12px;
        padding: 16px;
      }

      .chart-container {
        height: 200px;
      }
    `}</style>
  </div>
);
}