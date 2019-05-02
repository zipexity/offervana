import React from "react";
import PropTypes from "prop-types";

function Testimonials(props) {
  const { classes } = props;
  return (
    <iframe
      src="//fast.wistia.net/embed/playlists/b3vzlcxe83?loop=true&media_0_0%5BautoPlay%5D=false&media_0_0%5BcontrolsVisibleOnLoad%5D=false&theme=slide&version=v1&videoFoam=false&videoOptions%5BautoPlay%5D=true&videoOptions%5BinlineOptionsOnly%5D=false&videoOptions%5BplayerColor%5D=46A1BA&videoOptions%5Bversion%5D=v1.1&videoOptions%5BvideoHeight%5D=360&videoOptions%5BvideoWidth%5D=640&videoOptions%5BvolumeControl%5D=true"
      allowtransparency="true"
      frameborder="0"
      scrolling="no"
      class="wistia_playlist"
      name="wistia_playlist"
      allowfullscreen
      mozallowfullscreen
      webkitallowfullscreen
      oallowfullscreen
      msallowfullscreen
      width="100%"
      height="392"
    />
  );
}

Testimonials.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Testimonials;
