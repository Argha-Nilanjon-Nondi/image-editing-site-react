import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { imageStyleDis } from "../action";
import Download from "./Download";

class ImageEditor extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       filter_string:"",
    }
  }


  gatherAllStyle=()=>{
    let property;
    let temp_filter_string=""
    for(property in this.props.imageStyle){
      temp_filter_string += `${property}(${this.props.imageStyle[property]}) `;
    }
    this.setState({filter_string:temp_filter_string.trimRight()})
  }
  
  filterForImage=(event)=>{
    this.props.imageStyleDis(event.target.name,event.target.value)
    this.gatherAllStyle()
  }

  render() {
    return (
      <Fragment>
        <div className="w-11/12 h-96 mx-auto mt-8 grid p-4 grid-cols-2 gap-4 justify-center image-control-lg:h-min image-control-lg:grid-cols-1">
          <img className="h-full image-control-lg:h-96 image-control-sm-a:h-40 p-2 border-2 border-gray-500" src={this.props.imageFile} style={{filter:this.state.filter_string}} alt="Sorry" />
          <div className="h-full">
            <div>
              <div className="relative">
                <label htmlFor="customRange1" className="form-label">
                  Brightness ({this.props.imageStyle.brightness}%)
                </label>
                <input
                  type="range"
                  className=" form-range appearance-none w-full h-1 bg-gray-300 p-0 focus:outline-none focus:ring-0 focus:shadow-none"
                  name="brightness"
                  min={1}
                  max={100}
                  step="0.1"
                  defaultValue={this.props.imageStyle.brightness}
                  onChange={this.filterForImage}
                />
              </div>
              <div className="relative mt-1">
                <label htmlFor="customRange1" className="form-label">
                  Grayscale ({this.props.imageStyle.grayscale*100}%)
                </label>
                <input
                  type="range"
                  className=" form-range appearance-none w-full h-1 bg-gray-300 p-0 focus:outline-none focus:ring-0 focus:shadow-none"
                  name="grayscale"
                  min="0"
                  max="1"
                  step="0.01"
                  defaultValue={this.props.imageStyle.grayscale}
                  onChange={this.filterForImage}
                />
              </div>
              <div className="relative mt-1">
                <label htmlFor="customRange1" className="form-label">
                  Contrast ({this.props.imageStyle.contrast*100}%)
                </label>
                <input
                  type="range"
                  className=" form-range appearance-none w-full h-1 bg-gray-300 p-0 focus:outline-none focus:ring-0 focus:shadow-none"
                  name="contrast"
                  min="0"
                  max="1"
                  step="0.01"
                  defaultValue={this.props.imageStyle.contrast}
                  onChange={this.filterForImage}
                />
              </div>
              <div className="relative mt-1">
                <label htmlFor="customRange1" className="form-label">
                  Invert ({this.props.imageStyle.invert*100}%)
                </label>
                <input
                  type="range"
                  className=" form-range appearance-none w-full h-1 bg-gray-300 p-0 focus:outline-none focus:ring-0 focus:shadow-none"
                  name="invert"
                  min="0"
                  max="1"
                  step="0.01"
                  defaultValue={this.props.imageStyle.invert}
                  onChange={this.filterForImage}
                />
              </div>
              <div className="relative mt-1">
                <label htmlFor="customRange1" className="form-label">
                  sepia ({this.props.imageStyle.sepia * 100}%)
                </label>
                <input
                  type="range"
                  className=" form-range appearance-none w-full h-1 bg-gray-300 p-0 focus:outline-none focus:ring-0 focus:shadow-none"
                  name="sepia"
                  min="0"
                  max="1"
                  step="0.01"
                  defaultValue={this.props.imageStyle.sepia}
                  onChange={this.filterForImage}
                />
              </div>
            </div>
            <Download></Download>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (props) => {
  return {
    imageFile: props.imageFile,
    imageStyle:props.imageStyle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    imageStyleDis: (property,value) => dispatch(imageStyleDis(property,value)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ImageEditor);
