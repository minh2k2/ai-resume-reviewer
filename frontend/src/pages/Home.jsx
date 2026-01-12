import { useState } from 'react'
import { Container, CircularProgress } from '@mui/material'
import UploadCard from '../components/ResumeUploader/UploadCard'
import ResultSection from '../components/ReviewResult/ResultSection'
import { mockAIResult } from '../mocks/aiResult'

const Home = () => {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleAnalyze = () => {
    setLoading(true)
    setTimeout(() => {
      setResult(mockAIResult)
      setLoading(false)
    }, 1200)
  }

  return (
    <Container maxWidth="md">
      <UploadCard
        file={file}
        onFileChange={(e) => setFile(e.target.files[0])}
        onAnalyze={handleAnalyze}
      />

      {loading && <CircularProgress size={20} />}

      {result && <ResultSection result={result} />}
    </Container>
  )
}
export default Home
