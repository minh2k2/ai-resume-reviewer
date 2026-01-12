import { Paper, Typography } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'

const ResultSection = ({ result }) => {
  return (
    <Paper sx={{ mt: 4, p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Resume Score: {result.score}/100
      </Typography>

      <LinearProgress variant="determinate" value={result.score} />

      <Typography fontWeight={600}>Strengths</Typography>
      <ul>
        {result.strengths.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <Typography fontWeight={600}>Weaknesses</Typography>
      <ul>
        {result.weaknesses.map((w, i) => (
          <li key={i}>{w}</li>
        ))}
      </ul>

      <Typography fontWeight={600}>Suggestions</Typography>
      <ul>
        {result.suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </Paper>
  )
}
export default ResultSection
