import { useState, useEffect } from 'react';

export default function StatsOverview({ profileData }) {
  // Safely extract platformProfiles with optional chaining
  const platformProfiles = profileData?.platformProfiles?.platformProfiles ?? [];

  // Guard clause to prevent SSR crash
  if (!Array.isArray(platformProfiles) || platformProfiles.length === 0) {
    return null; // or return a fallback UI if desired
  }

  // Find platform-specific profiles
  const leetcodePlatform = platformProfiles.find(profile => profile.platform === 'leetcode');
  const GeeksforGeeksPlatform = platformProfiles.find(profile => profile.platform === 'geeksforgeeks');
  const codeforcesPlatform = platformProfiles.find(profile => profile.platform === 'codeforces');
  const hackerRankPlatform = platformProfiles.find(profile => profile.platform === 'hackerrank');
  const codechefPlatform = platformProfiles.find(profile => profile.platform === 'codechef');

  // Extract question stats or default to 0
  const leetcode = leetcodePlatform?.totalQuestionStats?.totalQuestionCounts || 0;
  const gfg = GeeksforGeeksPlatform?.totalQuestionStats?.totalQuestionCounts || 0;
  const cf = codeforcesPlatform?.totalQuestionStats?.totalQuestionCounts || 0;
  const hackerrank = hackerRankPlatform?.totalQuestionStats?.totalQuestionCounts || 0;
  const codechef = codechefPlatform?.totalQuestionStats?.totalQuestionCounts || 0;

  const totalQuestions = leetcode + gfg + cf + hackerrank + codechef;

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="bg-neutral-900 rounded-lg shadow-lg h-full w-full">
      <div className="p-4 sm:p-5 md:p-6 flex flex-col">
        <h2 className="text-lg text-gray-400 mb-1">Total Questions</h2>
        <div
          className={`text-4xl font-bold transition-all duration-500 ${
            animate ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {totalQuestions}
        </div>
      </div>
    </div>
  );
}
