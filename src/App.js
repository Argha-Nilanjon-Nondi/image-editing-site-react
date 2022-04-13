import React, { Component, Fragment } from 'react'
import FileUpload from "./Components/FileUpload";
import ImageEditor from "./Components/ImageEditor";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Fragment>
        {this.props.editStatus === true ? <><ImageEditor></ImageEditor></> : <><FileUpload></FileUpload></>}
      
      
      </Fragment>
    )
  }
}


const mapStateToProps = (props) => {
  return {
    fileUploadStatus:props.fileUploadStatus,
    editStatus:props.editStatus
  };
};

export default connect(mapStateToProps)(App);
