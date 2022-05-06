import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import cartActions from './store/actions/cart';

const CardItem = ({ product }) => {

  const cart = useSelector(state => state.cart.value);
  const dispatch = useDispatch();

  return (
    <Grid item display='flex' flexDirection="column" justifyContent="space-between" mx={1}>
      <Paper sx={{
        width: '180px',
        minHeight: '320px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
      }}>
        <img flex='1' width="100%" height="auto" src={product.image} alt={product.description} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          flex: 1,
          justifyContent: 'space-between'

        }}>
          <Typography variant="h6" lineHeight="1">{product.name}</Typography>
          <Typography variant="p">{product.description}</Typography>
          <Typography justifySelf="end" variant="subtitle1">R$ {product.price}</Typography>
        </Box>
      </Paper>
      <Button
        variant="contained"
        onClick={() => dispatch(cartActions.Add(cart, product))}
      >
        Adicionar
      </Button>
    </Grid>
  )
}

export default CardItem;