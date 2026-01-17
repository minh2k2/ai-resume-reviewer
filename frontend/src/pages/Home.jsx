import { useState } from 'react'
import { Container, CircularProgress, Box } from '@mui/material'
import UploadCard from '../components/ResumeUploader/UploadCard'
import ResultSection from '../components/ReviewResult/ResultSection'


const Home = () => {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleAnalyze = async () => {
    if (!file) return

    setLoading(true)
    setResult(null)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('http://127.0.0.1:8000/api/analyze', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.detail || 'Analysis failed')
      }

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Error analyzing resume:', error)
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <UploadCard
        file={file}
        onFileChange={(e) => setFile(e.target.files[0])}
        onAnalyze={handleAnalyze}
      />

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <CircularProgress size={20} />
        </Box>
      )}

      {result && <ResultSection result={result} />}
    </Container>
  )
}
export default Home
