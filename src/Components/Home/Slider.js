import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000}>
        <div data-src="https://i.ibb.co/K9qBRzJ/hp-laptop-3.png" />
        <div data-src="https://i.ibb.co/wW96b67/apple-laptop-1.jpg" />
        <div data-src="https://i.ibb.co/Svtk7YG/hp-laptop-1.jpg" />
      </AutoplaySlider>
    );
};

export default Slider;