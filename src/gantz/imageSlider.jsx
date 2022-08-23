import React from "react";

export class ImageSlider extends React.Component {
  state = {
    images: [
      // require("./images/gantz (1).jpg"),
      require("./images/gantz (2).jpg"),
      // require("./images/gantz (3).jpg"),
      require("./images/gantz (4).jpg"),
      require("./images/gantz (5).jpg"),
      require("./images/gantz (6).jpg"),
      require("./images/gantz (7).jpg"),
    ],
    index: 0,
  };

  handleNext = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };

  handlePrev = () => {
    this.setState({
      index: this.state.index - 1,
    });
  };

  render() {
    return (
      <div className="content">
        <div className="img">
          <img
            style={{
              width: "90%",
              //   height: "auto",
              objectFit: "cover",
            }}
            src={this.state.images[this.state.index]}
            alt="images"
          />
        </div>

        <div className="btns">
          {this.state.index !== 0 ? (
            <button className="btn--p" onClick={this.handlePrev}>
              Prev
            </button>
          ) : null}
          {this.state.index < 4 ? (
            <button className="btn--n" onClick={this.handleNext}>
              Next
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}
