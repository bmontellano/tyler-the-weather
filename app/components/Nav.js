var React = require("react");
var Weather = require("./Weather");

function Nav() {
  return (
    <div className="nav">
      <h1>Weather App</h1>
      <Weather />
    </div>
  );
}

module.exports = Nav;
