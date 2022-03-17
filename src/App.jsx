import { useState, useEffect } from 'react'
import Header from './components/Header'
import SlidesList from './components/SlidesList'
import axios from 'axios'
import './App.css'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

const App = () => {

  const [InputIsLoading, setInputIsLoading] = useState(false)

  const [Company, setCompany] = useState({
    name: '',
    slug: import.meta.env.VITE_COMPANY_SLUG,
    pitch: {
      name: '',
      slides: []
    }
  })

  useEffect(async () => {
  
    const result = await axios.get('companies/' + Company.slug)
  
    if (result.data && result.data.name) {

      setCompany(result.data)

    }
  
  }, [])

  const handleFileChange = (file) => {

    let PitchName = getTitleFromFilename(file.name)

    axios
      .post('pitches', { company_slug: Company.slug, name: PitchName})
      .then((result) => {

        const formData = new FormData()
        formData.append('pitch_id', result.data.id)
        formData.append('uploaded_file', file)
    
        setInputIsLoading(true)

        Company.pitch = result.data
        setCompany(Company)
    
        axios
          .post('slides', formData)
          .then((result) => {
            Company.pitch.slides = result.data
            setCompany(Company)
          })
          .catch((err) => {
            console.log(err)
          })
          .then(() => {
            setInputIsLoading(false)
          })

      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getTitleFromFilename = (name) => {

    name = name.split('.')[0]
    name = name.charAt(0).toUpperCase() + name.replace(/[^a-zA-Z0-9]/g, " ").slice(1)

    return name
  }

  return (
    <div className="app">
      <Header companyName={Company.name} InputIsLoading={InputIsLoading} fileInputLabel="Upload Pitch" handleFileChange={handleFileChange}/>
      <div className="app-container">
        <h2 className="app-pitch-title">{Company.pitch ? Company.pitch.name : 'Welcome'}</h2>
        <div className="app-divider"></div>
        <SlidesList slides={Company.pitch ? Company.pitch.slides : []} />
      </div>
    </div>
  )
}

export default App
