import { Box, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <Box sx={{
      position: 'fixed',
      width: '100%',
      height: '48px',
      top: 'calc(100vh - 48px)',
      bgcolor: 'secondary.dark',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Typography component='p' px={{
        color: '#fff',
      }}>&copy; Lumar Criativa | {new Date().getFullYear()}</Typography>
    </Box>
  )
}
