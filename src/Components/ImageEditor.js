import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { imageStyleDis } from "../action";

class ImageEditor extends Component {
  
  filterForImage=(event)=>{
    this.props.imageStyleDis(event.target.name,event.target.value)
  }

  render() {
    return (
      <Fragment>
        <div className="w-11/12 h-96 mx-auto mt-8 grid p-4 grid-cols-2 gap-4 justify-center">
          <img className="h-full" src={this.props.imageFile} style={{filter:this.props.imageStyle}} alt="Sorry" />
          <div className="h-full">
            <div>
              <div className="relative">
                <label for="customRange1" className="form-label">
                  Gray Scale
                </label>
                <input
                  type="range"
                  className=" form-range appearance-none w-full h-1 bg-gray-300 p-0 focus:outline-none focus:ring-0 focus:shadow-none"
                  name="brightness"
                  min={0}
                  max={100}
                  defaultValue={0}
                  onChange={this.filterForImage}
                />
              </div>
            </div>
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
