import React from 'react'

const ImageContext = React.createContext({})

export const ImageProvider = ImageContext.Provider
export const ImageConsumer = ImageContext.Consumer

export default ImageContext