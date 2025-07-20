import { useState, useEffect } from 'react';

const ProblemsSolved = ({ profileData }) => {
  const colorMap = {
    "text-green-400": "#22c55e",
    "text-yellow-400": "#eab308",
    "text-red-400": "#ef4444",
    "text-blue-400": "#3b82f6",
    "text-purple-400": "#a855f7",
    "text-orange-400": "#fb923c",
    "text-pink-400": "#ec4899"
  };

  const [problemsData, setProblemsData] = useState({
    fundamentals: { total: 0, categories: [] },
    dsa: { total: 0, categories: [] },
    competitive: { total: 0, categories: [] }
  });

  useEffect(() => {
    if (profileData && profileData.platformProfiles && profileData.platformProfiles.platformProfiles) {
      const platforms = profileData.platformProfiles.platformProfiles;
      const gfgProfile = platforms.find(p => p.platform === 'geeksforgeeks');
      const hackerrankProfile = platforms.find(p => p.platform === 'hackerrank');
      const leetcodeProfile = platforms.find(p => p.platform === 'leetcode');
      const geeksforgeeksProfile = platforms.find(p => p.platform === 'geeksforgeeks');
      const codechefProfile = platforms.find(p => p.platform === 'codechef');
      const codeforcesProfile = platforms.find(p => p.platform === 'codeforces');

      const fundamentals = { total: 0, categories: [] };
      const dsa = { total: 0, categories: [] };
      const competitive = { total: 0, categories: [] };

      if (gfgProfile?.totalQuestionStats?.totalQuestionCounts) {
        fundamentals.categories.push({
          name: "GFG",
          count: 2,
          color: "text-green-400"
        });
        fundamentals.total += 2;
      }

      if (hackerrankProfile?.totalQuestionStats?.totalQuestionCounts) {
        fundamentals.categories.push({
          name: "HackerRank",
          count: hackerrankProfile.totalQuestionStats.totalQuestionCounts,
          color: "text-yellow-400"
        });
        fundamentals.total += hackerrankProfile.totalQuestionStats.totalQuestionCounts;
      }

      if (leetcodeProfile?.totalQuestionStats) {
        const { easyQuestionCounts, mediumQuestionCounts, hardQuestionCounts } = leetcodeProfile.totalQuestionStats;

        if (easyQuestionCounts) {
          dsa.categories.push({ name: "Easy", count: easyQuestionCounts, color: "text-green-400" });
          dsa.total += easyQuestionCounts;
        }
        if (mediumQuestionCounts) {
          dsa.categories.push({ name: "Medium", count: mediumQuestionCounts, color: "text-yellow-400" });
          dsa.total += mediumQuestionCounts;
        }
        if (hardQuestionCounts) {
          dsa.categories.push({ name: "Hard", count: hardQuestionCounts, color: "text-red-400" });
          dsa.total += hardQuestionCounts;
        }
      }

      if (geeksforgeeksProfile?.totalQuestionStats?.totalQuestionCounts) {
        dsa.total += geeksforgeeksProfile.totalQuestionStats.totalQuestionCounts;
      }

      if (codechefProfile?.totalQuestionStats?.totalQuestionCounts) {
        competitive.categories.push({
          name: "Codechef",
          count: codechefProfile.totalQuestionStats.totalQuestionCounts,
          color: "text-green-400"
        });
        competitive.total += codechefProfile.totalQuestionStats.totalQuestionCounts;
      }

      if (codeforcesProfile?.totalQuestionStats?.totalQuestionCounts) {
        competitive.categories.push({
          name: "Codeforces",
          count: codeforcesProfile.totalQuestionStats.totalQuestionCounts,
          color: "text-yellow-400"
        });
        competitive.total += codeforcesProfile.totalQuestionStats.totalQuestionCounts;
      }

      setProblemsData({ fundamentals, dsa, competitive });
    }
  }, [profileData]);

  const renderProgressCircle = (total, categories) => {
    const segments = categories.map(category => ({
      ...category,
      percentage: (category.count / total) * 100
    })).sort((a, b) => b.percentage - a.percentage);

    const circumference = 2 * Math.PI * 40;
    let currentOffset = 0;

    return (
      <div className="bg-neutral-900 rounded-full w-32 h-32 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#2c2c2c" strokeWidth="10" />
          {segments.map((segment, index) => {
            const dashArray = circumference;
            const dashOffset = circumference * (1 - segment.percentage / 100);
            const startOffset = currentOffset;
            currentOffset += segment.percentage / 100 * circumference;
            const strokeColor = colorMap[segment.color] || "#2c2c2c";

            return (
              <circle
                key={index}
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke={strokeColor}
                strokeWidth="10"
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "center",
                  strokeDashoffset: dashOffset - startOffset
                }}
              />
            );
          })}
          <text
            x="50"
            y="55"
            textAnchor="middle"
            fontSize="22"
            fontWeight="bold"
            fill="white"
          >
            {total}
          </text>
        </svg>
      </div>
    );
  };

  const renderSection = (title, data) => (
    <div className="mb-10">
      <h3 className="text-gray-300 text-lg font-semibold mb-4">{title}</h3>
      <div className="flex items-center justify-between">
        {renderProgressCircle(data.total, data.categories)}
        <div className="flex flex-col gap-2 flex-grow pl-4">
          {data.categories.map((category, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded"
            >
             <span className={`${category.color} text-sm`}>{category.name}</span>

             <span className="font-semibold text-sm">{category.count}</span>

            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-neutral-900 border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl text-center font-bold text-white mb-6">Problems Solved</h2>

      {renderSection("Fundamentals", problemsData.fundamentals)}
      <hr className="my-6 border-gray-700" />

      {renderSection("DSA", problemsData.dsa)}
      <hr className="my-6 border-gray-700" />

      {renderSection("Competitive Programming", problemsData.competitive)}
    </div>
  );
};

export default ProblemsSolved;
