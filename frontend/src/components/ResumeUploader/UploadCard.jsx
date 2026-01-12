import { Box, Button, Typography, Paper, Grid } from '@mui/material'
import BackupIcon from '@mui/icons-material/Backup'

const UploadCard = ({ file, onFileChange, onAnalyze }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Paper elevation={3} sx={{ p: 4, width: 400, textAlign: 'center' }}>
        <BackupIcon sx={{ fontSize: 40, mb: 1 }} />

        {file ? (
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              maxWidth: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            title={file.name}
          >
            Selected file: {file.name}
          </Typography>
        ) : (
          <Typography variant="body2" gutterBottom sx={{ mb: 2 }}>
            Upload your Resume (PDF only)
          </Typography>
        )}

        <Grid
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          gap={2}
        >
          <Button fullWidth variant="contained" component="label">
            Upload PDF
            <input
              hidden
              type="file"
              accept="application/pdf"
              onChange={onFileChange}
            />
          </Button>

          <Button
            fullWidth
            variant="outlined"
            disabled={!file}
            onClick={onAnalyze}
          >
            Analyze Resume
          </Button>
        </Grid>
      </Paper>
    </Box>
  )
}
export default UploadCard
