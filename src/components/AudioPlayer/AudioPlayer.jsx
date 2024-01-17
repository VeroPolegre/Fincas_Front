import React, { useState, useEffect } from "react";

const AudioPlayer = (data) => {
  const [audioUrl, setAudioUrl] = useState(null);

  useEffect(() => {
    if (data) {
      try {
        const blob = new Blob([data], { type: "audio/mp3" });
        setAudioUrl(URL.createObjectURL(blob));
      } catch (error) {
        console.error("Error in useEffect:", error);
      }
    }
  }, [data]);
  return (
    <audio controls>
      <source src={audioUrl} type="audio/mp3" />
      Your browser does not support the audio tag.
    </audio>
  );
};

export default AudioPlayer;
