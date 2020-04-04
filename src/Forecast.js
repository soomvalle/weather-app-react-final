import React from "react";
import ForecastColumn from "./ForecastColumn";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row Forecast">
      <div className="col-2">
        <ForecastColumn />
      </div>
      <div className="col-2">
        <ForecastColumn />
      </div>
      <div className="col-2">
        <ForecastColumn />
      </div>
      <div className="col-2">
        <ForecastColumn />
      </div>
      <div className="col-2">
        <ForecastColumn />
      </div>
    </div>
  );
}
