import React from "react";
import useFirestore from "../Hooks/useFirestore";
import { connect } from "react-redux";
import { setClubIcon } from "../Redux/Actions";
import "./ChooseClubIcon.css";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const ChooseClubIcon = ({ dispatch, name }) => {
  const { docs } = useFirestore("clubbatches");

  const clickHandler = (e) => {
    dispatch(setClubIcon(e.target.value, name));
  };

  return (
    // map through the club icon collection and provide them with a dropdown menu
    <div>
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-required-label">Icon</InputLabel>

        <Select
          name="clubicons"
          id="clubicons"
          value=""
          onChange={clickHandler}
        >
          <MenuItem value="">
            <em>Team</em>
          </MenuItem>

          {docs
            ? docs.map((doc) => (
                <MenuItem label={doc.name} value={doc.url}>
                  {doc.name}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
    </div>
  );
};

export default connect()(ChooseClubIcon);
