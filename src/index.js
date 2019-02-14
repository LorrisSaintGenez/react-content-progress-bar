import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

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
    const { borderColor, borderWidth } = this.props;
    return (
      <div
        css={css`
          position: fixed;
          border-bottom: ${borderWidth}px solid ${borderColor};
          width: 0;
          top: 0;
          z-index: 999;
        `}
        ref={this.refProgressBar}
      />
    );
  }
}

ProgressBar.propTypes = {
  borderColor: PropTypes.string.isRequired,
  borderWidth: PropTypes.number.isRequired,
  contentHeight: PropTypes.string.isRequired
};

export default ProgressBar;
