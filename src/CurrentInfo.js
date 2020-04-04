import React from "react";

export default function CurrentInfo() {
  return (
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
