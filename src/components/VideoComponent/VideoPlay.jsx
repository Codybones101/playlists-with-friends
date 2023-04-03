import React from 'react';

export default function ScreenRecordingVideo () { 
    return (
      <div>
        <video controls>
          <source src="public/video1.mp4" />
        </video>
      </div>
    );
  }
