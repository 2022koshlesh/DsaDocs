import React, { useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';

export const GitHubCalendarComponent = ({ username }) => {
  // Define a valid theme for react-github-calendar
 const theme = {
  dark: [
    '#161b22',  // level 0 - empty
    '#0e4429',  // level 1
    '#006d32',  // level 2
    '#26a641',  // level 3
    '#39d353'   // level 4
  ]
};


  // Inject custom CSS on component mount
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .calendar-section {
        background-color: rgba(0, 0, 0, 0.5);
        border: 1px solid #2e2e2e;
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0,0,0,0.4);
        backdrop-filter: blur(6px);
        color: white;
        margin-top: 20px;
      }

      .calendar-wrapper {
        display: flex;
        justify-content: center;
        overflow-x: auto;
        padding-bottom: 10px;
      }

      .calendar-wrapper svg {
        min-width: 700px;
      }

      .calendar-legend text {
        fill: #ccc;
        font-size: 12px;
      }

      .calendar-labels {
        text-align: center;
        font-size: 14px;
        color: #aaa;
        margin-top: 10px;
      }

      .calendar-labels a {
        color: #4f8edc;
        text-decoration: underline;
      }

      .calendar-labels a:hover {
        color: #80b8f1;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="calendar-section">
      <div className="calendar-wrapper">
        <GitHubCalendar
          username={username}
          theme={theme}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          hideColorLegend={false}
          labels={{
            totalCount: "{{count}} contributions in the last year",
          }}
        />
      </div>
      
    </section>
  );
};

export default GitHubCalendarComponent;
