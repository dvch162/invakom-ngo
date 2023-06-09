// components/YouTubePlayer.js

import React from 'react';

export default function YouTubePlayer({ videoId }) {
  return (
    <div>
      {/* Embed the YouTube video using an iframe */}
      <iframe
        width="560"
        height="315"
        //src={`https://www.youtube.com/embed/${videoId}`}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
