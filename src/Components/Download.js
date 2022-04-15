import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Download extends Component {
  gatherAllStyle = () => {
    let property;
    let temp_filter_string = "";
    for (property in this.props.imageStyle) {
      temp_filter_string += `${property}(${this.props.imageStyle[property]}) `;
    }
    console.log(temp_filter_string);
    return temp_filter_string.trimRight();
  };

  downloadImage = () => {
      
    let canvas = document.getElementById("canvas");
    let download_btn = document.getElementById("download-btn");
     
    let ctx = canvas.getContext("2d");
    let img = new Image();
    img.src = this.props.imageFile;
    img.onload = () => {
      ctx.canvas.height = img.height;
      ctx.canvas.width = img.width;
      ctx.filter = this.gatherAllStyle();
      ctx.drawImage(img, 0, 0);
      download_btn.download = "your_image.png";
      download_btn.href = canvas.toDataURL("image/jpg");
    };
  };

  componentDidMount = () => {};

  render() {
    return (
      <Fragment>
        <canvas id="canvas" className="hidden"></canvas>
        <a
          onClick={this.downloadImage}
          id="download-btn"
          className="text-white bg-indigo-500 border-0 py-1 px-4 mt-2 inline-block focus:outline-none hover:bg-indigo-600 rounded text-lg sm:mt-0 mr-1"
        >
          Download
        </a>
      </Fragment>
    );
  }
}

const mapStateToProps = (props) => {
  return {
    imageStyle: props.imageStyle,
    imageFile: props.imageFile,
  };
};

export default connect(mapStateToProps)(Download);
