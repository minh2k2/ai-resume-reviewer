import {AppBar,Toolbar, Typography, Container} from '@mui/material';

export default function AppLayout({children}) {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        AI Resume Reviewer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container sx={{marginTop: 4}}>
                {children}
            </Container>
        </>
    )
}