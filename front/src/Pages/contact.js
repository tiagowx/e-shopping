import React from 'react';
import { Button, Grid, TextField } from '@mui/material';

const Contact = () => {
  return (
    <>
      <Grid container direction="row" xs={12}>
        <TextField id="name" label="Nome" fullWidth />
        <TextField id="message" label="Mensagem" fullWidth />
      </Grid>
      <Button variant="contained" color="primary">Enviar</Button>
    </>
  )
}
export default Contact;