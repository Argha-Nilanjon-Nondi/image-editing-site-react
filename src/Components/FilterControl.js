import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { imageStyleDis,filterStringDis } from "../action";

class FilterControl extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         brightness:this.props.imageStyle.brightness,
         grayscale:this.props.imageStyle.grayscale,
         invert:this.props.imageStyle.invert,
         sepia:this.props.imageStyle.sepia,
         contrast:this.props.imageStyle.contrast,
      }
    }

    gatherAllStyle = () => {
        console.log(this.props.imageStyle)
        let property;
        let temp_filter_string = ""
        for (property in this.props.imageStyle) {
            temp_filter_string += `${property}(${this.props.imageStyle[property]}) `;
        }
        this.props.filterStringDis(temp_filter_string)
    }

    filterForImage = (event) => {
        this.props.imageStyleDis(event.target.name, event.target.value)
        this.setState({[event.target.name]:event.target.value})
        this.gatherAllStyle()
    }

  render() {
    return (
      <Fragment>
            <div className="h-full">
                <div>
                    <div className="relative">
                        <label htmlFor="customRange1" className="form-label">
                            Brightness ({this.state.brightness}%)
                            
                        </label>
                       
                        <input
                            type="range"
                            className=" form-range appearance-none w-full h-1 bg-gray-300 p-0 focus:outline-none focus:ring-0 focus:shadow-none"
                            name="brightness"
                            min={1}
                            max={100}
                            step="0.1"
                            defaultValue={this.state.brightness}
                            onChange={this.filterForImage}
                        />
                    </div>
                    <div className="relative mt-1">
                        <label htmlFor="customRange1" className="form-label">
                            Grayscale ({this.state.grayscale * 100}%)
                        </label>
                        <input
                            type="range"
                            className=" form-range appearance-none w-full h-1 bg-gray-300 p-0 focus:outline-none focus:ring-0 focus:shadow-none"
                            name="grayscale"
                            min="0"
                            max="1"
                            step="0.01"
                            defaultValue={this.state.grayscale}
                            onChange={this.filterForImage}
                        />
                    </div>
                    <div className="relative mt-1">
                        <label htmlFor="customRange1" className="form-label">
                            Contrast ({this.state.contrast * 100}%)
                        </label>
                        <input
                            type="range"
                            className=" form-range appearance-none w-full h-1 bg-gray-300 p-0 focus:outline-none focus:ring-0 focus:shadow-none"
                            name="contrast"
                            min="0"
                            max="1"
                            step="0.01"
                            defaultValue={this.state.contrast}
                            onChange={this.filterForImage}
                        />
                    </div>
                    <div className="relative mt-1">
                        <label htmlFor="customRange1" className="form-label">
                            Invert ({this.state.invert * 100}%)
                        </label>
                        <input
                            type="range"
                            className=" form-range appearance-none w-full h-1 bg-gray-300 p-0 focus:outline-none focus:ring-0 focus:shadow-none"
                            name="invert"
                            min="0"
                            max="1"
                            step="0.01"
                            defaultValue={this.state.invert}
                            onChange={this.filterForImage}
                        />
                    </div>
                    <div className="relative mt-1">
                        <label htmlFor="customRange1" className="form-label">
                            sepia ({this.state.sepia * 100}%)
                        </label>
                        <input
                            type="range"
                            className=" form-range appearance-none w-full h-1 bg-gray-300 p-0 focus:outline-none focus:ring-0 focus:shadow-none"
                            name="sepia"
                            min="0"
                            max="1"
                            step="0.01"
                            defaultValue={this.state.sepia}
                            onChange={this.filterForImage}
                        />
                    </div>
                </div>
              
            </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (props) => {
    return {
        imageStyle: props.imageStyle,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        imageStyleDis: (property, value) => dispatch(imageStyleDis(property, value)),
        filterStringDis: (value) => dispatch(filterStringDis(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterControl);