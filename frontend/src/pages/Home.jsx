import { Box, Button, Typography, Paper } from "@mui/material";

const Home = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Paper elevation={3} sx={{ p: 4, width: 400, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Upload your resume
        </Typography>

        <Button
          variant="contained"
          component="label"
          fullWidth
          sx={{ mt: 2 }}
        >
          Upload PDF
          <input hidden type="file" accept="application/pdf" />
        </Button>
      </Paper>
    </Box>
  );
};

export default Home;
