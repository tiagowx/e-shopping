import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';
import cartActions from '../store/actions/cart';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant='outline' onClick={handleOpen}>
        {cart.value}
        <ShoppingCartIcon color='primary' />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: 'auto',
          height: 'auto',
          paddingX: '8px',
          overflowY: 'auto'
        }}
      >
        <Box display="absolute" >
          <Paper>
            <Typography variant="h5">Carrinho</Typography>
            <TableContainer component={Paper}>
              <Table aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">#</TableCell>
                    <TableCell align="center">Item</TableCell>
                    <TableCell align="center">Image</TableCell>
                    <TableCell align="center">Quantidade</TableCell>
                    <TableCell align="center">Preço Untário</TableCell>
                    <TableCell align="center">Preço Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.cart.map(item => {
                    return (
                      <TableRow key={item.id}>
                        <TableCell align="center">
                          <Button sx={{ minWidth: '32px' }} onClick={() => dispatch(cartActions.Remove(cart, item))}>
                            (X)
                          </Button>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {item.id}
                        </TableCell>
                        <TableCell align="center">{item.name}</TableCell>
                        <TableCell align="center">
                          <Box cell display="flex" width="80px">
                            <img width="80px" height="auto" src={item.image} alt={item.name} />
                          </Box>
                        </TableCell>
                        <TableCell align="center">
                          <Box item display='flex' alignItems='center'>
                            <Button sx={{ minWidth: '32px' }} onClick={() => dispatch(cartActions.DecrementItem(cart, item))}>
                              (-)
                            </Button>
                            <Typography>
                              {item.quantity}
                            </Typography>
                            <Button sx={{ minWidth: '32px' }} onClick={() => dispatch(cartActions.IncrementItem(cart, item))}>
                              (+)
                            </Button>
                          </Box>
                        </TableCell>
                        <TableCell align="center">R$ {item.price}</TableCell>
                        <TableCell align="center">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</TableCell>
                      </TableRow>
                    )
                  })}


                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell align="center">-</TableCell>
                    <TableCell align="center">-</TableCell>
                    <TableCell align="center">-</TableCell>
                    <TableCell align="center">-</TableCell>
                    <TableCell align="center">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">

                    </TableCell>
                    <TableCell align="center">Desconto</TableCell>
                    <TableCell align="center">Qt. de Itens</TableCell>
                    <TableCell align="center">Total</TableCell>
                    <TableCell align="center">
                      <Typography variant="h6"> R$ {(cart.total).toFixed(2).replace('.', ',')}</Typography>
                    </TableCell>
                  </TableRow>
                </TableFooter>
                <caption></caption>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </Modal>
    </>
  )
}

export default Cart;