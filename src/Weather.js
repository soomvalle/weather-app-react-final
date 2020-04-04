import React from "react";

export default function Weather(){
    return (
      <div>
        <form className="Search">
          <input
            type="search"
            placeholder="Where to?"
            className="input-field"
          />
          <input type="submit" value="Let's go" className="btn btn-primary" />
        </form>
        </div>

        <div className="row">
          <div className="col-6 LeftColumn">
            <ul>
              <li>Porto</li>
              <li>Today</li>
              <li>Clear</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation</li>
              <li>Humidity</li>
              <li>Wind</li>
            </ul>
          </div>
          </div>
    );
}