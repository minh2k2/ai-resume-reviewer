import { useState } from 'react'
import { Box, Button, Typography, Paper, Grid } from '@mui/material'
import BackupIcon from '@mui/icons-material/Backup'

const Home = () => {
  const [file, setFile] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleAnalyze = () => {
    setLoading(true)

    setTimeout(() => {
      setResult(mockAIResult)
      setLoading(false)
    }, 1200)
  }
  return (
    <Box display="flex" justifyContent="center">
      <Paper elevation={3} sx={{ p: 4, width: 400, textAlign: 'center' }}>
        <BackupIcon sx={{ fontSize: 40, mb: 1 }} />
        {file ? (
          <Typography
            variant="body2"
            sx={{
              ml: 1,
              mb: 2,
              maxWidth: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            title={file.name} // hover xem full
          >
            Selected file: {file.name}
          </Typography>
        ) : (
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              ml: 1,
              mb: 2,
              maxWidth: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Upload your Resume (PDF only)
          </Typography>
        )}
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          gap={2}
          justifyContent="center"
        >
          <Button fullWidth={true} variant="contained" component="label">
            Upload PDF
            <input
              hidden
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Button>

          <Button fullWidth={true} variant="outlined" disabled={!file}>
            Analyze Resume
          </Button>
        </Grid>
      </Paper>
    </Box>
  )
}

export default Home
