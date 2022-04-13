import ImageContext from "./Context/imageContext"
import React, { Component, Fragment } from 'react'
import FileUpload from "./Components/FileUpload";

export default class App extends Component {
  static contextType=ImageContext

  componentDidMount=()=>{
  }
  render() {
    return (
      <Fragment>
      <div>App</div>
      <FileUpload></FileUpload>
      </Fragment>
    )
  }
}

