var React = require("react");
var PropTypes = require("prop-types");

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    var value = evt.target.value;
    console.log(value);

    this.setState(function() {
      return {
        city: value
      };
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    console.log("submitting " + this.state.city);
    this.setState(function() {
      return {
        city: ""
      };
    });
  }
  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit} className="column">
          <input
            type="text"
            placeholder="Los Angeles"
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.city}
          />
          <button className="button" type="submit" disabled={!this.state.city}>
            Get Weather
          </button>
        </form>
      </div>
    );
  }
}

Weather.propTypes = {
  direction: PropTypes.string
};

Weather.defaultProps = {
  direction: "column"
};

module.exports = Weather;
