import { combineReducers } from "redux";

const fileUploadStatus = (state = false, action) => {
  if (action.type === "file_upload_status") {
    return action.payload;
  }
  return state;
};

const editStatus = (state = false, action) => {
  if (action.type === "edit_status") {
    return action.payload;
  }
  return state;
};

const imageFile = (state = null, action) => {
  if (action.type === "image_file") {
    return action.payload;
  }
  return state;
};

const imageStyle = (state = "", action) => {
  if (action.type === "image_style_edit") {

    state+=`${action.payload.property}(${action.payload.value}) `;

  }


  return state;
};

const rootReducers = combineReducers({
  fileUploadStatus,
  editStatus,
  imageFile,
  imageStyle,
});

export default rootReducers;
