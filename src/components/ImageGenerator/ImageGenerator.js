import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setBackgroundImg } from "../Redux/Actions";
import "./ImageGenerator.css";
import axios from "axios";

const ImageGenerator = ({ dispatch }) => {
  const [images, setImages] = useState();

  // fetch the unsplash API
  // get 10 images for the search term "soccer"

  useEffect(() => {}, []);
  const selectSports = (e) => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.unsplash.com/search/photos?query=${e.target.value}&client_id=6nkoe-ZuldKE0fptim4ZdAHY4wnnJwRu4HYqU_ArIAQ&per_page=9`
      );
      setImages(result.data.results);
    };
    fetchData();
  };

  // display a single image above the grid after clicking on it
  const clickHandler = (e) => {
    dispatch(setBackgroundImg(e.target.src));
  };

  return (
    <div className="imageSelection">
      <h3>Choose a sport, then click on a picture to display it.</h3>

      <select name="sports" id="sports" onChange={selectSports}>
        <option value="" disabled selected>
          Sports
        </option>
        <option value="soccer">Soccer</option>
        <option value="basketball">Basketball</option>
        <option value="tennis">Tennis</option>
      </select>

      <div className="ImageGenerator">
        {images
          ? images.map((image) => (
              <div key={image.id} className="img-wrap">
                <img
                  src={image.urls.regular}
                  alt={image.alt_description}
                  onClick={clickHandler}
                />

                <br />
              </div>
            ))
          : "Choose your sport!"}
      </div>
    </div>
  );
};

export default connect()(ImageGenerator);
