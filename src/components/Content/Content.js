import React from "react";
import "./Content.css";
import { connect } from "react-redux";
import { setActiveTemplate } from "../Redux/Actions";
import EditDisplay from "../EditDisplay/EditDisplay";
import ContentFormResult from "../ContentForm/ContentFormResult";
import ContentFormQuote from "../ContentForm/ContentFormQuote";
import SelectTemplate from "../SelectTemplate/SelectTemplate";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const Content = ({ dispatch, activeTemplate }) => {
  return (
    <div className="content-design">
      <EditDisplay />
      <div className="forms">
        <div className="select-form">
          <SelectTemplate />
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
