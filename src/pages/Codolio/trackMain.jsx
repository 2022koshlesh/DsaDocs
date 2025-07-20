import { useState, useEffect, useCallback } from "react";
import StatsOverview from "./StatsOverview";
import ActivityHeatmap from "./ActivityHeatmap";
import ContestSection from "./ContestSection";
import RatingHistory from "./RatingHistory";
import PlatformStats from "./PlatformStats";
import AwardsSection from "./AwardsSection";
import ProblemsSolved from "./ProblemsSolved";
import GitHubUserDashboard from "./GitHubUserDashboard";
import Layout from "@theme/Layout";
import "./style.css";

export default function Home() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);

        const cachedData = localStorage.getItem('codolioProfileData');
        if (cachedData) {
          setProfileData(JSON.parse(cachedData));
          setLoading(false);
        }

        if (!navigator.onLine) {
          if (!cachedData) {
            setError("You're offline and no cached data is available");
          }
          return;
        }

        const endpoint = "https://api.codolio.com/profile?userKey=KoshleshRaj";

        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) throw new Error("API request failed");

        const data = await response.json();
        setProfileData(data.data || data);
        localStorage.setItem('codolioProfileData', JSON.stringify(data.data || data));
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handlePlatformSelect = useCallback(
    (platform) => {
      setSelectedPlatform(platform === selectedPlatform ? null : platform);
      if (platform !== selectedPlatform) {
        setTimeout(() => {
          const ratingSection = document.getElementById("rating-history-section");
          if (ratingSection) {
            ratingSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    },
    [selectedPlatform]
  );

  if (!navigator.onLine && !profileData) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <div className="text-xl font-semibold">You're currently offline</div>
            <div className="mt-2 text-gray-400">
              Some features may not be available until you reconnect.
            </div>
            <button
              className="mt-4 px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
              onClick={() => window.location.reload()}
            >
              Retry when online
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="text-xl font-semibold">Loading your profile...</div>
        </div>
      </Layout>
    );
  }

  if (error || !profileData) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <div className="text-xl font-semibold mb-4">
              {error ? `Error: ${error}` : "Failed to load profile data"}
            </div>
            <div className="mb-4 text-gray-400">
              This might be due to:
              <ul className="list-disc list-inside mt-2 text-left">
                <li>API service temporarily unavailable</li>
                <li>Network connectivity issues</li>
                <li>Invalid request parameters</li>
              </ul>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </Layout>
    );
  }

return (
  <Layout
    title={`${profileData.firstName} ${profileData.secondName} - Coding Profile`}
    description="Coding profile dashboard"
  >
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">
          {profileData.firstName} {profileData.secondName}
        </h1>
        <p className="dashboard-subtitle">
          Dive into my coding journey — from contests to contributions. Track problem-solving, growth, and achievements across platforms.
        </p>
      </header>

      <div className="dashboard-grid">
        {/* Left Column */}
        <div className="dashboard-left">
          <div className="card"><StatsOverview profileData={profileData} /></div>
          <div className="card"><ContestSection profileData={profileData} /></div>
          <div className="card"><ProblemsSolved profileData={profileData} /></div>
        </div>

        {/* Right Column */}
        <div className="dashboard-right">
          <div className="card"><ActivityHeatmap profileData={profileData} /></div>

          <div className="dashboard-subgrid">
            <div className="card"><AwardsSection profileData={profileData} /></div>
            <div className="card">
              <PlatformStats
                platformProfiles={profileData.platformProfiles}
                onPlatformSelect={handlePlatformSelect}
                selectedPlatform={selectedPlatform}
              />
            </div>
          </div>

          <div className="card" id="rating-history-section">
            <RatingHistory profileData={profileData} platform={selectedPlatform} />
          </div>

          <div className="card"><GitHubUserDashboard /></div>
        </div>
      </div>
    </div>
  </Layout>
);


}
