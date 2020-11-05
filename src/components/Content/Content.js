import React from "react";
import { connect } from "react-redux";
import EditDisplay from "../EditDisplay/EditDisplay";
import ContentFormResult from "../ContentForm/ContentFormResult";
import ContentFormQuote from "../ContentForm/ContentFormQuote";
import SelectTemplate from "../SelectTemplate/SelectTemplate";

import "./Content.css";

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
