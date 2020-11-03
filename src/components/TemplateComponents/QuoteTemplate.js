import React from "react";
import { connect } from "react-redux";

import "./QuoteTemplate.css";

const QuoteTemplate = ({ teamHome, iconHome, quote, personName }) => {
  return (
    <div className="template-component-wrap">
      <div className="team-wrap">
        <h2 id="team-home">{teamHome}</h2>
        <div className="icon-home">
          <img id="icon-home" src={iconHome} alt="" />
        </div>
      </div>

      <div className="quote-text">{quote}</div>
      <div className="person">{personName}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    teamHome: state.teamHome,
    teamAway: state.teamAway,
    scoreHome: state.scoreHome,
    scoreAway: state.scoreAway,
    iconHome: state.iconHome,
    iconAway: state.iconAway,
    league: state.league,
    matchday: state.matchday,
    personName: state.personName,
    quote: state.quote,
  };
};

export default connect(mapStateToProps)(QuoteTemplate);
