import React, { Component } from "react";
import PropTypes from "prop-types";

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.refProgressBar = React.createRef();
    this.computeProgress.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (this.refProgressBar && this.refProgressBar.current) {
        this.refProgressBar.current.style.width = `${this.computeProgress()}%`;
      }
    });
    window.addEventListener("resize", () => {
      if (this.refProgressBar && this.refProgressBar.current) {
        this.refProgressBar.current.style.width = `${this.computeProgress()}%`;
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this);
    window.removeEventListener("resize", this);
  }

  computeProgress = () => {
    return Math.min(
      (window.pageYOffset / this.props.contentRef.current.clientHeight) * 100,
      100
    );
  };

  render() {
    const { color, width } = this.props;
    return (
      <div
        style={{
          position: "fixed",
          borderBottomWidth: width,
          borderBottomStyle: "solid",
          borderBottomColor: color,
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
  contentRef: PropTypes.object.isRequired
};

export default ProgressBar;
