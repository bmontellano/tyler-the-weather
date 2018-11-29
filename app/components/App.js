var React = require("react");
var Weather = require("./Weather");
var Nav = require("./Nav");

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div
          style={{ backgroundImage: "url('app/images/pattern.svg')" }}
          className="home-container"
        >
          <div className="heading">
            <h1>Select a City</h1>
            <Weather />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
