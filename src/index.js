import React, { Component } from "react";
import PropTypes from "prop-types";

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.refProgressBar = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const percent = Math.min(
        (window.pageYOffset / this.props.contentHeight) * 100,
        100
      );
      this.refProgressBar.current.style.width = `${percent}%`;
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this);
  }

  render() {
    const { color, width } = this.props;
    return (
      <div
        style={{
          position: "fixed",
          borderBottom: `${width}px solid ${color}`,
          width: 0,
          top: 0,
          zIndex: 999
        }}
        ref={this.refProgressBar}
      />
    );
  }
}

ProgressBar.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  contentHeight: PropTypes.string.isRequired
};

export default ProgressBar;
