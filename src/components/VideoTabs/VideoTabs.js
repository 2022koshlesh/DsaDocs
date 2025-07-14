import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const VideoTabs = ({ playlists }) => {
  return (
    <Tabs>
      {playlists.map(({ value, label, url, text, default: isDefault }) => (
        <TabItem key={value} value={value} label={label} default={isDefault}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_(2017).svg"
              alt="YouTube Logo"
              width="40"
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            <span style={{ color: 'white', fontWeight: 'bold' }}>{text}</span>
          </a>
        </TabItem>
      ))}
    </Tabs>
  );
};

export default VideoTabs;
