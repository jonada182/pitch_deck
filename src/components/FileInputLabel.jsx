import React from 'react'

const FileInputLabel = ({ labelText, InputIsLoading }) => {
  return (
    <label className="app-btn" htmlFor="app-file-input">{ InputIsLoading ? 'Loading...' : labelText }</label>
  )
}

export default FileInputLabel