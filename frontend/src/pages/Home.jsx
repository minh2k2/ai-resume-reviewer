import { useState } from 'react'
import { Container, CircularProgress, Box } from '@mui/material'
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
