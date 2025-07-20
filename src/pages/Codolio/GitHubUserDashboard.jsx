import { useEffect, useState } from 'react';
import { Star, Github, Code, Calendar, Activity, TrendingUp } from 'lucide-react';
import GitHubCalendarComponent from './GthubCalendar';

export default function GitHubUserDashboard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [languageData, setLanguageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.codolio.com/github/profile?userKey=KoshleshRaj`);
        if (!response.ok) throw new Error(`API error: ${response.status}`);
        const data = await response.json();
        if (data.status.success) {
          setUserData(data.data);
          const languages = Object.entries(data.data.languageDistributions || {});
          const total = languages.reduce((acc, [, value]) => acc + value, 0);
          const sortedLanguages = languages
            .map(([name, value]) => ({
              name,
              value,
              percentage: (value / total) * 100,
              color: getLanguageColor(name)
            }))
            .sort((a, b) => b.value - a.value);
          setLanguageData(sortedLanguages);
        } else {
          throw new Error(data.status.message || 'API returned error');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      TypeScript: '#3178c6',
      JavaScript: '#f7df1e',
      HTML: '#e34c26',
      CSS: '#264de4',
      Python: '#3572A5',
      PHP: '#777bb4',
      'C++': '#f34b7d',
      C: '#555555',
      Hack: '#4d41b1',
      Dockerfile: '#384d54',
      Blade: '#f7523f'
    };
    return colors[language] || '#6b7280';
  };

  const formatNumber = (num) => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || '0';
  };

  if (loading) return <div className="gh-container">Loading...</div>;
  if (error) return <div className="gh-error">Error: {error}</div>;
  if (!userData) return null;

  const stats = [
    { icon: Star, label: 'Stars', value: userData.stars },
    { icon: Code, label: 'Commits', value: formatNumber(userData.commitCounts) },
    { icon: Activity, label: 'Contributions', value: formatNumber(userData.totalContributions) },
    { icon: Calendar, label: 'Active Days', value: userData.totalActiveDays }
  ];

  return (
    <div className="gh-container">
      <div className="gh-card">
        <div className="gh-header">
          <div className="gh-avatar">
            <Github size={32} />
          </div>
          <div>
            <h1 className="gh-title">{userData.githubProfile}</h1>
            <p className="gh-subtitle">User #{userData.userId}</p>
          </div>
          <div className="gh-stats">
            {stats.map((stat, i) => (
              <div key={i} className="gh-stat">
                <div className="gh-stat-label">
                  <stat.icon size={16} />
                  {stat.label}
                </div>
                <div className="gh-stat-value">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="gh-grid">
        <div className="gh-card full">
          <div className="gh-section-header">
            <TrendingUp size={18} />
            <h2>Activity Overview</h2>
          </div>
        </div>
          <GitHubCalendarComponent username="2022koshlesh" />

        <div className="gh-card">
          <div className="gh-section-header">
            <Code size={18} />
            <h2>Languages</h2>
          </div>
          <div className="gh-lang-bar">
            {languageData.slice(0, 5).map((lang, i) => (
              <div
                key={i}
                style={{
                  width: `${lang.percentage}%`,
                  backgroundColor: lang.color
                }}
                title={`${lang.name}: ${lang.percentage.toFixed(1)}%`}
              />
            ))}
          </div>
          <div className="gh-lang-list">
            {languageData.slice(0, 6).map((lang, i) => (
              <div key={i} className="gh-lang-item">
                <div className="gh-lang-left">
                  <span
                    className="gh-dot"
                    style={{ backgroundColor: lang.color }}
                  ></span>
                  {lang.name}
                </div>
                <div className="gh-lang-percent">{lang.percentage.toFixed(1)}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .gh-container {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
          font-family: sans-serif;
          color: #f0f0f0;
          background: #0d1117;
        }
        .gh-card {
          background: #161b22;
          border: 1px solid #30363d;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 24px;
        }
        .full {
          grid-column: span 2;
        }
        .gh-header {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
        }
        .gh-avatar {
          background: linear-gradient(to right, #6366f1, #8b5cf6);
          padding: 12px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .gh-title {
          font-size: 24px;
          margin: 0;
        }
        .gh-subtitle {
          font-size: 12px;
          color: #8b949e;
        }
        .gh-stats {
          display: flex;
          gap: 20px;
          flex: 1;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .gh-stat {
          text-align: center;
        }
        .gh-stat-label {
          font-size: 12px;
          color: #8b949e;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .gh-stat-value {
          font-size: 16px;
          font-weight: bold;
        }
        .gh-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }
        .gh-section-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          font-weight: bold;
          color: #c9d1d9;
        }
        .gh-lang-bar {
          height: 8px;
          border-radius: 6px;
          overflow: hidden;
          display: flex;
          margin-bottom: 12px;
        }
        .gh-lang-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .gh-lang-item {
          display: flex;
          justify-content: space-between;
          background: rgba(255,255,255,0.05);
          padding: 6px 10px;
          border-radius: 8px;
          font-size: 14px;
        }
        .gh-lang-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .gh-dot {
          height: 10px;
          width: 10px;
          border-radius: 50%;
          display: inline-block;
        }
        .gh-error {
          padding: 16px;
          background: #58151c;
          color: #fdd;
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
}
