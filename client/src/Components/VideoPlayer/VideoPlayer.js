import React from "react";
import "../../Pages/HomePage/homepage.css";
export default class VideoPlayer extends React.Component {
  componentWillMount() {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.src = "https://fast.wistia.com/embed/medias/mml3f3zvvq.jsonp";
    script1.async = true;

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }

  render() {
    return (
      <div
        class="video-player-box wistia_responsive_padding"
        style={{ padding: "56.25% 0 0 0", position: "relative" }}
      >
        <div
          class="wistia_responsive_wrapper"
          style={{
            height: "100%",
            left: "0",
            position: "absolute",
            top: "0",
            width: "100%"
          }}
        >
          <span
            class="wistia_embed wistia_async_mml3f3zvvq popover=true popoverAnimateThumbnail=false videoFoam=true"
            style={{
              display: "inline-block",
              height: "100%",
              position: "relative",
              width: "100%"
            }}
          >
            &nbsp;
          </span>
        </div>
      </div>
    );
  }
}
