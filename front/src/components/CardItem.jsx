import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

const CardItem = ({ name, price, img, description }) => {

  return (
    <Grid item display='flex' flexDirection="column" alignContent="space-between" mx={1}>
      <Paper sx={{
        width: '180px',
        height: '240px',
      }}>
        <img width="100%" height="auto" src={img} alt={description} />
      </Paper>

      <Box item textAlign="center">
        <Typography variant="h6">{name}</Typography>
        <Typography variant="p">{description}</Typography>
        <Typography variant="subtitle1">R$ {price}</Typography>
        <Button variant="contained">Adicionar</Button>
      </Box>
    </Grid>
  )
}

export default CardItem;