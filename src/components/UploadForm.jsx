import React from 'react'
import FileInput from './FileInput'
import FileInputLabel from './FileInputLabel'

const UploadForm = ({ handleFileChange, InputIsLoading }) => {
  return (
    <div className="app-form">
      <FileInputLabel labelText="Upload Pitch" InputIsLoading={InputIsLoading} />
      <FileInput handleFileChange={(handleFileChange)} InputIsLoading={InputIsLoading} />
    </div>
  )
}

export default UploadForm