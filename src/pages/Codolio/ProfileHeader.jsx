export default function ProfileHeader({ profileData }) {
  const { firstName, secondName, imageUrl, userDetails } = profileData;

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src={imageUrl || '/placeholder-avatar.png'}
            alt={`${firstName} ${secondName}`}
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-2xl font-bold text-center text-white">
          {firstName} {secondName}
        </h1>
        <p className="text-gray-400 text-center mt-1">@{profileData.profileName}</p>

        {userDetails?.userPersonalDetails?.country && (
          <div className="flex items-center mt-2 text-gray-300">
            <span className="material-icons mr-1 text-sm">public</span>
            <span>{userDetails.userPersonalDetails.country}</span>
          </div>
        )}

        {userDetails?.userPersonalDetails?.college && (
          <div className="flex items-center mt-1 text-gray-300">
            <span className="material-icons mr-1 text-sm">school</span>
            <span>{userDetails.userPersonalDetails.college}</span>
          </div>
        )}

        <div className="flex space-x-3 mt-4">
          {userDetails?.socialMediaProfileList?.map((social, index) => (
            <SocialMediaLink key={index} social={social} />
          ))}
          {userDetails?.githubProfile && (
            <a
              href={`https://github.com/${userDetails.githubProfile}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373..."></path>
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className="mt-6 text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">Profile Views</span>
          <span className="font-semibold">{profileData.profileViews}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">Last Refresh</span>
          <span className="font-semibold">
            {new Date().toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Profile Visibility</span>
          <span className="font-semibold text-green-400">Public</span>
        </div>
      </div>
    </div>
  );
}
