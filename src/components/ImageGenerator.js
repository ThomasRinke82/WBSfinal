import React, { useState, useEffect } from "react";
import Style from "./ImageGenerator.css";
import axios from "axios";

function ImageGenerator() {
  const [images, setImages] = useState();

  // fetch the unsplash API
  // get 10 images for the search term "soccer"

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.unsplash.com/search/photos?query=soccer&client_id=6nkoe-ZuldKE0fptim4ZdAHY4wnnJwRu4HYqU_ArIAQ&total=12"
      );
      setImages(result.data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Choose a picture:</h2>
      <div className="ImageGenerator">
        {images
          ? images.map((image) => (
              <div key={image.id} className="img-wrap">
                <img src={image.urls.thumb} alt={image.alt_description} />
                <p>{image.alt_description}</p>

                <br />
              </div>
            ))
          : "nothing found"}
      </div>
    </div>
  );
}

export default ImageGenerator;
