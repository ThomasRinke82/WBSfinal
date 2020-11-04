import React from "react";
import "./Content.css";
import { connect } from "react-redux";
import { setActiveTemplate } from "../Redux/Actions";
import EditDisplay from "../EditDisplay/EditDisplay";
import ContentFormResult from "../ContentForm/ContentFormResult";
import ContentFormQuote from "../ContentForm/ContentFormQuote";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const Content = ({ dispatch, activeTemplate }) => {
  const handleActiveTemplate = (e) => {
    console.log(e);
    dispatch(setActiveTemplate(e.target.value));
    console.log(setActiveTemplate);
  };

  return (
    <div className="content-design">
      <EditDisplay />
      <div className="forms">
        <div className="select-form">
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-required-label">
              What do you want?
            </InputLabel>
            <Select
              name="template"
              id="template"
              value=""
              onChange={handleActiveTemplate}
            >
              <MenuItem value="">
                <em>Template</em>
              </MenuItem>
              <MenuItem value="result" name="result">
                Result Image
              </MenuItem>
              <MenuItem value="quote" name="quote">
                Quote Image
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="content-form">
          {activeTemplate === "result" ? <ContentFormResult /> : null}
          {activeTemplate === "quote" ? <ContentFormQuote /> : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeTemplate: state.activeTemplate,
  };
};

export default connect(mapStateToProps)(Content);
