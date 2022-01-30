import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    /*map a function to all the images in the array*/
    return (
      <ImageCard key={image.id} image={image} />
    ); /*get their url from the api*/
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
