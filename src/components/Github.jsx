import React from 'react';
import GitHubCalendar from 'react-github-calendar';

export const GitHubCalendarComponent = ({ username }) => {
  const theme = {
    level0: '#161b22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353'
  };

  return (
    <>
      <section className="github-calendar-container">
        <div className="calendar-wrapper">
          <GitHubCalendar
            username={username}
            theme={theme}
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            hideColorLegend={false}
            labels={{
              totalCount: count => `${count} contributions in the last year`
            }}
          />
        </div>
        <div className="calendar-footer">
          <p>
            View my complete contribution history on{' '}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </section>

      <style>{`
        .github-calendar-container {
          border-radius: 12px;
          border: 1px solid #2c2c2c;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 24px;
          box-shadow: 0 0 12px rgba(0,0,0,0.3);
          backdrop-filter: blur(6px);
          color: #ccc;
          font-family: Arial, sans-serif;
          margin: 20px 0;
        }

        .calendar-wrapper {
          overflow-x: auto;
          display: flex;
          justify-content: center;
          padding-bottom: 16px;
        }

        .calendar-footer {
          margin-top: 16px;
          text-align: center;
          font-size: 14px;
          color: #aaa;
        }

        .calendar-footer a {
          color: #8ab4f8;
          text-decoration: underline;
        }

        .calendar-footer a:hover {
          color: #b3ccff;
        }
      `}</style>
    </>
  );
};

export default GitHubCalendarComponent;
