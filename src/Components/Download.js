import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Download extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       image_data:undefined,
       image_ready_status:false
    }
  }

  gatherAllStyle = () => {
    let property;
    let temp_filter_string = "";
    for (property in this.props.imageStyle) {
      temp_filter_string += `${property}(${this.props.imageStyle[property]}) `;
    }
    console.log(temp_filter_string);
    return temp_filter_string.trimRight();
  };

  prepareImage =()=>{
    let canvas = document.getElementById("canvas");
    let download_btn=document.getElementById("download-btn")
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
      this.setState({image_ready_status:true})
    };
  }

  downloadImage = () => {
      this.setState({image_ready_status:false})
  };

  componentDidMount = () => {};

  render() {
    return (
      <Fragment>
        <canvas id="canvas" className="hidden"></canvas>
        <a
          onClick={this.prepareImage}
          className="text-white bg-indigo-500 border-0 py-1 px-4 mt-2 inline-block focus:outline-none hover:bg-indigo-600 rounded text-lg sm:mt-0 mr-1"
        >
          Prepare Image
        </a>
        <a
          onClick={this.downloadImage}
          id="download-btn"
          className={`text-white bg-indigo-500 border-0 py-1 px-4 mt-2 inline-block focus:outline-none hover:bg-indigo-600 rounded text-lg sm:mt-0 mr-1 ${this.state.image_ready_status===true?"":"hidden"}`}
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
