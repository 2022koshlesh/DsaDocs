import React from 'react';
import { Code, AlignLeft, BarChart, Award, Terminal, Github } from 'lucide-react';

const PlatformStats = ({ platformProfiles, onPlatformSelect, selectedPlatform }) => {
  if (!platformProfiles || !platformProfiles.platformProfiles) {
    return (
      <div className="platform-container">
        <p className="no-data">No platform data available</p>
        <style>{`
          .platform-container {
            background-color: #1f1f1f;
            color: white;
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            text-align: center;
          }
          .no-data {
            color: #9ca3af;
          }
        `}</style>
      </div>
    );
  }

  const sortedPlatforms = [...platformProfiles.platformProfiles].sort((a, b) => {
    const aCount = a.totalQuestionStats?.totalQuestionCounts || 0;
    const bCount = b.totalQuestionStats?.totalQuestionCounts || 0;
    return bCount - aCount;
  });

  const handlePlatformClick = (platform) => {
    if (onPlatformSelect) {
      onPlatformSelect(platform);
    }
  };

  const totalContests = sortedPlatforms.reduce((count, platform) => {
    return count + (platform.contestActivityStats?.contestActivityList?.length || 0);
  }, 0);

  const platformsWithContests = sortedPlatforms.filter(
    platform => (platform.contestActivityStats?.contestActivityList?.length || 0) > 0
  );

  return (
    <div className="platform-stats-container">
      <div className="platform-flex-wrapper">
        <div className="platform-total">
          <h2 className="platform-heading">Total Contests</h2>
          <div className="platform-total-count">{totalContests}</div>
        </div>

        <div className="platform-list">
          {platformsWithContests.map((platform) => {
            const platformName = getPlatformDisplayName(platform.platform);
            const contestCount = platform.contestActivityStats?.contestActivityList?.length || 0;
            const isSelected = selectedPlatform === platform.platform;

            return (
              <div
                key={platform.platform}
                className={`platform-item ${isSelected ? 'platform-selected' : ''}`}
                onClick={() => handlePlatformClick(platform.platform)}
              >
                <div className="platform-left">
                  <div className={`platform-icon ${isSelected ? 'selected-icon' : ''}`}>
                    {getPlatformIcon(platform.platform)}
                  </div>
                  <span className={`platform-name ${isSelected ? 'selected-name' : ''}`}>
                    {platformName}
                  </span>
                </div>
                <span className={`platform-count ${isSelected ? 'selected-count' : ''}`}>
                  {contestCount}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .platform-stats-container {
          background-color: #1f1f1f;
          color: white;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          margin-top: 20px;
        }

        .platform-flex-wrapper {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .platform-total {
          flex: 1;
        }

        .platform-heading {
          font-size: 20px;
          font-weight: 500;
          color: #9ca3af;
          margin-bottom: 16px;
        }

       .platform-total-count {
  font-size: 32px;
  font-weight: 600;
  color: white;
}


        .platform-list {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .platform-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.2s;
          background-color: #2a2a2a;
          color: #ccc;
        }

        .platform-item:hover {
          background-color: #3a3a3a;
        }

        .platform-selected {
          background-color: #312e81;
          color: white;
        }

        .platform-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .platform-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          color: #9ca3af;
        }

        .selected-icon {
          color: #c7d2fe;
        }

        .platform-name {
          font-size: 16px;
        }

        .selected-name {
          font-weight: 600;
        }

        .platform-count {
  font-weight: 400;
  color: #9ca3af;
  font-size: 14px;
}


        .selected-count {
          color: #c7d2fe;
        }

        @media (min-width: 768px) {
          .platform-flex-wrapper {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
};

const getPlatformDisplayName = (platform) => {
  const displayNames = {
    'leetcode': 'LeetCode',
    'geeksforgeeks': 'GeeksForGeeks',
    'codeforces': 'CodeForces',
    'hackerrank': 'HackerRank',
    'codechef': 'CodeChef',
    'github': 'GitHub',
  };
  return displayNames[platform] || platform;
};

const getPlatformIcon = (platform) => {
  switch (platform) {
    case 'leetcode':
      return <Code size={20} />;
    case 'codechef':
      return <Terminal size={20} />;
    case 'codeforces':
      return <BarChart size={20} />;
    case 'geeksforgeeks':
      return <AlignLeft size={20} />;
    case 'hackerrank':
      return <Award size={20} />;
    case 'github':
      return <Github size={20} />;
    default:
      return <Terminal size={20} />;
  }
};

export default PlatformStats;
