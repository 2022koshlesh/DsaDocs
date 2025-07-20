import React, { useState } from 'react';

const AwardsSection = ({ profileData }) => {
  const [showAllAwards, setShowAllAwards] = useState(false);

  const getAllBadges = () => {
    const badges = [];
    if (!profileData?.platformProfiles?.platformProfiles) return [];
    profileData.platformProfiles.platformProfiles.forEach(platform => {
      if (platform.badgeStats?.badgeList) {
        platform.badgeStats.badgeList.forEach(badge => {
          badges.push({
            ...badge,
            platform: platform.platform,
            platformName: getPlatformDisplayName(platform.platform),
          });
        });
      }
    });
    return badges;
  };

  const badges = getAllBadges();
  const displayBadges = showAllAwards ? badges : badges.slice(0, 4);
  const badgeCount = badges.length;

  return (
    <>
      <div className="awards-container">
        <div className="awards-header">
          <h2>Awards</h2>
          <span className="badge-count">{badgeCount}</span>
        </div>

        {badges.length === 0 ? (
          <div className="no-awards">No awards found</div>
        ) : (
          <>
            <div className="badge-grid">
              {displayBadges.map((badge, index) => (
                <div
                  key={`${badge.platform}-${badge.name}-${index}`}
                  className="badge-item"
                >
                  <div className="badge-icon">
                    {badge.icon ? (
                      <img
                        src={getFullImageUrl(badge.icon)}
                        alt={badge.name}
                        className="badge-img"
                      />
                    ) : (
                      <div className="badge-placeholder">
                        <span>{getBadgeInitials(badge.name)}</span>
                      </div>
                    )}
                    {badge.stars && (
                      <div className="badge-stars">{badge.stars}★</div>
                    )}
                  </div>
                  <div className="badge-details">
                    <p className="badge-name" title={badge.name}>
                      {shortenBadgeName(badge.name)}
                    </p>
                    <p className="badge-platform">{badge.platformName}</p>
                  </div>
                </div>
              ))}
            </div>

            {badges.length > 4 && (
              <div className="show-toggle">
                <button onClick={() => setShowAllAwards(!showAllAwards)}>
                  {showAllAwards ? 'Show less' : 'Show more'}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <style>{`
        .awards-container {
          background-color: #1e1e1e;
          border-radius: 8px;
          padding: 20px;
          color: white;
          font-family: Arial, sans-serif;
          margin-top: 20px;
        }

        .awards-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .awards-header h2 {
          font-size: 20px;
          font-weight: bold;
          margin: 0;
        }

        .badge-count {
          font-size: 26px;
          color: #00bcd4;
          font-weight: bold;
        }

        .no-awards {
          color: #aaa;
          text-align: center;
          padding: 20px 0;
        }

        .badge-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 16px;
        }

        .badge-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .badge-icon {
          position: relative;
          width: 64px;
          height: 64px;
        }

        .badge-img {
          width: 64px;
          height: 64px;
          object-fit: contain;
          border-radius: 8px;
        }

        .badge-placeholder {
          width: 64px;
          height: 64px;
          background-color: #444;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
        }

        .badge-stars {
          position: absolute;
          bottom: -6px;
          right: -6px;
          background-color: #ffcc00;
          color: black;
          font-size: 12px;
          font-weight: bold;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 3px rgba(0,0,0,0.5);
        }

        .badge-details {
          margin-top: 8px;
        }

        .badge-name {
          font-size: 12px;
          font-weight: 500;
          max-width: 6rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .badge-platform {
          font-size: 11px;
          color: #aaa;
          text-transform: capitalize;
        }

        .show-toggle {
          text-align: center;
          margin-top: 16px;
        }

        .show-toggle button {
          background: none;
          border: none;
          color: #42a5f5;
          cursor: pointer;
          font-size: 14px;
          text-decoration: underline;
        }

        .show-toggle button:hover {
          color: #90caf9;
        }
      `}</style>
    </>
  );
};

// Helper functions
const getPlatformDisplayName = (platform) => {
  const displayNames = {
    leetcode: 'LeetCode',
    geeksforgeeks: 'GeeksForGeeks',
    codeforces: 'CodeForces',
    hackerrank: 'HackerRank',
    codechef: 'CodeChef',
    github: 'GitHub',
  };
  return displayNames[platform] || platform;
};

const getBadgeInitials = (name) => {
  if (!name) return '?';
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

const shortenBadgeName = (name) => {
  if (!name) return '';
  return name.length <= 20 ? name : name.substring(0, 18) + '...';
};

const getFullImageUrl = (url) => {
  if (url && url.startsWith('/static')) {
    return `https://leetcode.com${url}`;
  }
  return url;
};

export default AwardsSection;
