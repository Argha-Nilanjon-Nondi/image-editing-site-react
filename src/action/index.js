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
