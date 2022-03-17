import React from 'react'
import UploadForm from './UploadForm'

const Header = ({ companyName, fileInputLabel, handleFileChange, InputIsLoading }) => {

  const UploadFormRender = ({inputLabel}) => {
      
    if (inputLabel && inputLabel !== '') {
      return <UploadForm handleFileChange={handleFileChange} InputIsLoading={InputIsLoading} />
    }
  
    return false
  }

  return (
    <header className="app-header">
      <h3>{companyName}</h3>
      <UploadFormRender inputLabel={fileInputLabel} />
    </header>
  )
}

export default Header