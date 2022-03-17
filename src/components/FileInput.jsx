import React from 'react'

const FileInput = ({ handleFileChange, InputIsLoading }) => {
  
  const onFileChange = (e) => {
    handleFileChange(e.target.files[0])
  }

  return (
    <input disabled={InputIsLoading} onChange={onFileChange} type="file" id="app-file-input" name="app-file-input" accept="application/pdf" hidden />
  )
}

export default FileInput