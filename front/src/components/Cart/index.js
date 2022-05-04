import { Box, Button, Input, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.cart);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleIncrement = () => {};
  const handleDecrement = () => {};
  const handleRemove = () => {};

  return (
    <>
      <Button variant='outline' onClick={handleOpen}>
        <ShoppingCartIcon color='primary' />
        <Typography variant='p'>{cart.value}</Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box display="absolute" margin="auto" height="auto">
          <Paper sx={{
            width: 600,
            margin: 'auto',
            paddingX: '8px'
          }}>
            <Typography variant="h5">Carrinho</Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 600 }} aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">#</TableCell>
                    <TableCell align="center">Item</TableCell>
                    <TableCell align="center">Quantidade</TableCell>
                    <TableCell align="center">Preço Untário</TableCell>
                    <TableCell align="center">Preço Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={0}>
                    <TableCell component="th" scope="row">
                      0045
                    </TableCell>
                    <TableCell align="center">Nome</TableCell>
                    <TableCell width="40px" align="center">
                      <Input align="center" type="number" value={1}></Input>
                    </TableCell>
                    <TableCell align="center">R$ 12,00</TableCell>
                    <TableCell align="center">R$ 36,00</TableCell>
                  </TableRow>
                  {[].map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
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
                      <Typography variant="h6"> R$ 0.00</Typography>
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