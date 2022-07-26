import React from "react";
import Video from ".";

const Preview = () => {
  return (
    <div className="container space-y-12 my-28">
      <Video
        primary
        bgImageSrc="https://i.ibb.co/KbSwcWJ/image-01-1.jpg"
        iframeSrc="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1"
      />
      <Video
        info
        bgImageSrc="https://i.ibb.co/KbSwcWJ/image-01-1.jpg"
        iframeSrc="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1"
      />
      <Video
        danger
        bgImageSrc="https://i.ibb.co/KbSwcWJ/image-01-1.jpg"
        iframeSrc="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1"
      />
      <Video
        warning
        bgImageSrc="https://i.ibb.co/KbSwcWJ/image-01-1.jpg"
        iframeSrc="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1"
      />
    </div>
  );
};

export default Preview;
