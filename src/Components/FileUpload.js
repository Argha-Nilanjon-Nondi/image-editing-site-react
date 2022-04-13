import React, { Component, Fragment } from "react";
import ImageContext from "../Context/imageContext";

export default class FileUpload extends Component {
  static contextType = ImageContext;

constructor(props) {
  super(props)

  this.state = {
    fileUploadStatus:false,
    imageFile:undefined
  }
}

  selectFile = (event) => {
    let imageData = URL.createObjectURL(event.target.files[0])
    this.context.imageFile = imageData
    this.context.fileUploadStatus=true
    this.setState({
    fileUploadStatus:true,
    imageFile:imageData
    })

  };

  cancel=()=>{
    this.setState({
      imageFile:undefined,
      fileUploadStatus:false
    })
  }

  render() {
    return (
      <Fragment>
        <div className="container w-9/12 image-upload-sm:w-11/12 mx-auto">
          <div className="mb-6 bg-black-100  h-60">
            {this.state.fileUploadStatus === true ? (
              <>
                {" "}
                <img
                  src={this.state.imageFile}
                  className="w-full h-full"
                  alt="sorry"
                />
              </>
            ) : (
              <>
                {" "}
                <div className="h-full bg-gray-400 flex justify-center flex-col">
                  <p className="text-black text-center">Upload Image</p>
                </div>
              </>
            )}
          </div>
          {
            this.state.fileUploadStatus === false ? <div class="mb-3">
              <input
                class="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="formFileSm"
                onChange={this.selectFile}
                type="file"
                ency
              />
            </div>:<></>
          }
          <div className="m-1.5">
            {this.state.fileUploadStatus === true ? (
              <>
                <button class="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg sm:mt-0 mr-1">
                  Select
                </button>
                <button class="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-lg sm:mt-0" onClick={this.cancel}>
                  Cancel
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}
