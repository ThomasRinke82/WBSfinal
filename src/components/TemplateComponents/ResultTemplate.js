import React from "react";
import { connect } from "react-redux";

import "./ResultTemplate.css";

const ResultTemplate = ({
  teamHome,
  teamAway,
  scoreHome,
  scoreAway,
  iconHome,
  iconAway,
  league,
  matchday,
  location,
}) => {
  return (
    <div className="template-component-wrap">
      <div className="league-info">
        <h1 id="league">{league}</h1>
        <h1 id="matchday">{matchday}</h1>
        <h1 id="location">{location}</h1>
      </div>
      <div className="home">
        <h2 id="team-home">{teamHome}</h2>
        <div className="icon-home">
          <img id="icon-home" src={iconHome} alt="" />
        </div>
        <h2 id="score-home">{scoreHome}</h2>
      </div>

      <div className="away">
        <h2 id="team-away">{teamAway}</h2>
        <div className="icon-away">
          <img id="icon-away" src={iconAway} alt="" />
        </div>
        <h2 id="score-away">{scoreAway}</h2>
      </div>
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
    location: state.location,
  };
};

export default connect(mapStateToProps)(ResultTemplate);
