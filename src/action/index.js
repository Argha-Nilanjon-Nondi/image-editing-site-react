export const fileUploadStatusDis=(status)=>{
    return {
        type:"file_upload_status",
        payload:status
    }
}

export const editStatusDis = (status) => {
    return {
        type: "edit_status",
        payload:status
    }
}

export const imageFileDis = (file) => {
    return {
        type: "image_file",
        payload: file
    }
}

export const imageStyleDis = (property,value) => {
    return {
        type: "image_style_edit",
        payload: {
            property,
            value
        }
    }
}

export const filterStringDis=(value)=>{
    return {
        type: "filter_string_edit",
        payload: {
            value
        }
    }
}