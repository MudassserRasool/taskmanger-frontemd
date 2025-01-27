import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const CustomReactPlayer = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleReady = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="loader animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      <ReactPlayer
        url={url}
        onReady={handleReady}
        controls
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default CustomReactPlayer;