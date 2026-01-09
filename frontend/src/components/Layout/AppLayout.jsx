import { AppBar, Toolbar, Typography, Container } from '@mui/material'

export default function AppLayout({ children }) {
  return (
    <>
      <AppBar position="static" elevation={1}>
        <Toolbar sx={{ mx: 'auto', width: '100%' }}>
          <Typography variant="h6" fontWeight={600}>
            AI Resume Reviewer
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 4 }}>{children}</Container>
    </>
  )
}
