import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setBackgroundImg } from "../Redux/Actions";
import axios from "axios";

import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import "./ImageGenerator.css";

const useStyles = makeStyles((theme) => ({
  select: {
    backgroundColor: "#5effac",
    color: "#0c343f",
    width: "300px",
  },

  buttongroup: {
    marginTop: "20px",
  },
}));

const ImageGenerator = ({ dispatch }) => {
  const classes = useStyles();
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
      <FormControl className={classes.buttongroup} variant="outlined">
        <InputLabel id="demo-simple-select-required-label">
          Choose your sport
        </InputLabel>
        <Select
          className={classes.select}
          name="selectSport"
          id="selectSport"
          value=""
          onChange={selectSports}
        >
          <MenuItem value="" disabled selected>
            <em>Choose your sport.</em>
          </MenuItem>
          <MenuItem value="soccer" name="soccer">
            Soccer
          </MenuItem>
          <MenuItem value="basketball" name="basketball">
            Basketball
          </MenuItem>
          <MenuItem value="tennis" name="tennis">
            Tennis
          </MenuItem>
        </Select>
      </FormControl>

      {/*  <select name="sports" id="sports" onChange={selectSports}>
        <option value="" disabled selected>
          Sports
        </option>
        <option value="soccer">Soccer</option>
        <option value="basketball">Basketball</option>
        <option value="tennis">Tennis</option>
      </select> */}

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
          : console.log(
              'Images will come once you choose one in the "sports" dropdown section.'
            )}
      </div>
    </div>
  );
};

export default connect()(ImageGenerator);
