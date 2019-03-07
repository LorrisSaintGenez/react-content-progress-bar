import React, { Component } from "react";
import PropTypes from "prop-types";

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.refProgressBar = React.createRef();
    this.computeProgress.bind(this);
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.displayProgress();
    });
    window.addEventListener("resize", () => {
      this.displayProgress();
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

  displayProgress = () => {
    if (this.refProgressBar && this.refProgressBar.current) {
      const progress = this.computeProgress();
      this.refProgressBar.current.style.width = `${progress}%`;
      if (this.state.progress < 100 && progress === 100) {
        this.props.callback();
      }
      this.setState({ progress });
    }
  };

  render() {
    const {
      color,
      style,
      backgroundColor,
      thickness,
      borderRadius
    } = this.props;
    return (
      <div
        style={{
          backgroundColor,
          height: thickness,
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 999
        }}
      >
        <div
          style={{
            borderBottomColor: color,
            borderBottomStyle: style,
            borderBottomWidth: thickness,
            borderBottomRightRadius: borderRadius,
            borderTopRightRadius: borderRadius,
            width: 0
          }}
          ref={this.refProgressBar}
        />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  backgroundColor: PropTypes.string,
  callback: PropTypes.func,
  color: PropTypes.string,
  contentRef: PropTypes.object.isRequired,
  radius: PropTypes.number,
  style: PropTypes.string,
  thickness: PropTypes.number
};

ProgressBar.defaultProps = {
  backgroundColor: "transparent",
  callback: () => {},
  color: "white",
  radius: 0,
  style: "solid",
  thickness: 1
};

export default ProgressBar;
