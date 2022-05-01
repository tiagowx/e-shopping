import { Box, List, Paper, Typography } from "@mui/material";

const Categories = ({ children }) => {
  return (
    <Paper sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '280px',
      height: 'auto'
    }}>
      <Typography p={1} textAlign='center' variant="h5">Categorias</Typography>

      <Box container flex={1} >
        <List>
          {children}
        </List>
      </Box>
    </Paper>
  )
}

export default Categories;
