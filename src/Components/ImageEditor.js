import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Download from "./Download";
import FilterControl from "./FilterControl";

class ImageEditor extends Component {

  render() {
    return (
      <Fragment>
        <div className="w-11/12 h-96 mx-auto mt-8 grid p-4 grid-cols-2 gap-4 justify-center image-control-lg:h-min image-control-lg:grid-cols-1">
          <img className="h-full image-control-lg:h-96 image-control-sm-a:h-40 p-2 border-2 border-gray-500" src={this.props.imageFile} style={{filter:this.props.filterString}} alt="Sorry" />
          <FilterControl></FilterControl>
          <Download></Download>
         
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (props) => {
  return {
    imageFile: props.imageFile,
    filterString: props.filterString
  };
};


export default connect(mapStateToProps)(ImageEditor);
