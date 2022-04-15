import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fileUploadStatusDis, imageFileDis, editStatusDis } from "../action";

class FileUpload extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  selectFile = (event) => {
    let imageData = URL.createObjectURL(event.target.files[0]);

    this.props.fileUploadStatusDis(true);
    this.props.imageFileDis(imageData);
  };

  componentDidMount=()=>{
  }

  selected=()=>{
    this.props.editStatusDis(true)
  }

  cancel = () => {
    this.props.fileUploadStatusDis(false);
    this.props.imageFileDis(null);
  };

  render() {
    return (
      <Fragment>
        <div className="container mt-4 w-9/12 image-upload-sm:w-11/12 mx-auto">
          <div className="mb-6 bg-black-100  h-60">
            {this.props.fileUploadStatus === true ? (
              <>
                {" "}
                <img
                  src={this.props.imageFile}
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
          {this.props.fileUploadStatus === false ? (
            <div className="mb-3">
              <input
                className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="formFileSm"
                onChange={this.selectFile}
                type="file"
              />
            </div>
          ) : (
            <></>
          )}
          <div className="m-1.5">
            {this.props.fileUploadStatus === true ? (
              <>
                <button className="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg sm:mt-0 mr-1" onClick={this.selected}>
                  Select
                </button>
                <button
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-lg sm:mt-0"
                  onClick={this.cancel}
                >
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

const mapStateToProps = (props) => {
  return {
    fileUploadStatus: props.fileUploadStatus,
    editStatus: props.editStatus,
    imageFile: props.imageFile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fileUploadStatusDis: (status) => dispatch(fileUploadStatusDis(status)),
    editStatusDis: (status) => dispatch(editStatusDis(status)),
    imageFileDis: (file) => dispatch(imageFileDis(file)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(FileUpload);
