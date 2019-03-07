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
    const { color, style, width, backgroundColor } = this.props;
    return (
      <div
        style={{
          position: "fixed",
          backgroundColor,
          width: "100%",
          height: width,
          top: 0,
          zIndex: 999
        }}
      >
        <div
          style={{
            borderBottomColor: color,
            borderBottomStyle: style,
            borderBottomWidth: width,
            width: 0
          }}
          ref={this.refProgressBar}
        />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  color: PropTypes.string,
  style: PropTypes.string,
  width: PropTypes.number,
  contentRef: PropTypes.object.isRequired,
  backgroundColor: PropTypes.string,
  callback: PropTypes.func
};

ProgressBar.defaultProps = {
  color: "white",
  style: "solid",
  width: "1",
  backgroundColor: "blue",
  callback: () => {}
};

export default ProgressBar;
