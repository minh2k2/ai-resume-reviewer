import {
  Grid,
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  AlertTitle,
} from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'

const ResultSection = ({ result }) => {
  return (
    <Box mt={4}>
      <Box sx={{ textAlign: 'center', mt: 2, mb: 2, width: '30%', mx: 'auto' }}>
        <Typography variant="h8" gutterBottom>
          Resume Score: {result.score}%
        </Typography>
        <LinearProgress variant="determinate" value={result.score} />
      </Box>
      <AlertTitle>Resume Score: {result.score}%</AlertTitle>
      <Grid container spacing={3}>
        {/* Strengths */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              width: 350,
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <Box
              sx={{
                backgroundColor: '#56B162',
                px: 2,
                py: 1.5,
              }}
            >
              <Typography fontWeight={600} color="white">
                Strengths
              </Typography>
            </Box>

            {/* Content */}
            <Box>
              <List dense>
                {result.strengths.map((s, i) => (
                  <ListItem key={i}>
                    <ListItemText primary={s} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>

        {/* Weaknesses */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              width: 350,
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <Box
              sx={{
                backgroundColor: '#DE5042',
                px: 2,
                py: 1.5,
              }}
            >
              <Typography fontWeight={600} color="white">
                Weaknesses
              </Typography>
            </Box>

            {/* Content */}
            <Box>
              <List dense>
                {result.weaknesses.map((s, i) => (
                  <ListItem key={i}>
                    <ListItemText primary={s} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>

        {/* Suggestions */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              width: 350,
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <Box
              sx={{
                backgroundColor: '#E98D36',
                px: 2,
                py: 1.5,
              }}
            >
              <Typography fontWeight={600} color="white">
                Suggestions
              </Typography>
            </Box>

            {/* Content */}
            <Box>
              <List dense>
                {result.suggestions.map((s, i) => (
                  <ListItem key={i}>
                    <ListItemText primary={s} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
export default ResultSection
