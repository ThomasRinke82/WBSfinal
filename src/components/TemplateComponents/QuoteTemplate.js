import React from "react";
import { connect } from "react-redux";

import "./QuoteTemplate.css";

const QuoteTemplate = ({ teamHome, iconHome, quote, personName }) => {
  return (
    <div className="quote-component-wrap">
      <div className="quote-team-wrap">
        <img id="quote-team-icon" src={iconHome} alt="" />
        <h1 id="quote-team-name">{teamHome}</h1>
      </div>
      <div className="text-wrap">
        <div className="quote-text">{quote}</div>
        <div className="quote-person">{personName}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    teamHome: state.teamHome,
    iconHome: state.iconHome,
    personName: state.personName,
    quote: state.quote,
  };
};

export default connect(mapStateToProps)(QuoteTemplate);
