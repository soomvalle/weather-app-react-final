import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search">
      <input type="search" placeholder="Where to?" className="input-field" />
      <input type="submit" value="Let's go" className="btn" />
    </form>
  );
}
