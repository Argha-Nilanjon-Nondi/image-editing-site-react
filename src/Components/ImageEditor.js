import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class ImageEditor extends Component {
  render() {
    return (
      <Fragment>
        <div className="w-11/12 h-96 mx-auto mt-8 grid p-4 grid-cols-2 gap-4 justify-center">
          <img className="h-full" src={this.props.imageFile} alt="Sorry" />
          <div className="h-full">
            <div>
              <div class="relative">
                <label for="customRange1" class="form-label">
                  Gray Scale
                </label>
                <input
                  type="range"
                  class=" form-range appearance-none w-full h-1 bg-gray-300 p-0 focus:outline-none focus:ring-0 focus:shadow-none"
                  name="gray_scale"
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
  };
};

export default connect(mapStateToProps)(ImageEditor);
