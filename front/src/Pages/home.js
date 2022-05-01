import React from 'react';
import { Box, Container, Grid } from '@mui/material'
import Categories from '../components/Categories';
import TypeItem from '../components/TypeItem';
import CardItem from '../components/CardItem';

const HomePage = () => {
  return (
    <Container maxWidth="xl" >
      <Grid container direction="row" display='flex'>
        <Categories>
          <TypeItem name="Adesivos" quantity={25} />
          <TypeItem name="Camisas" quantity={32} />
          <TypeItem name="Canecas" quantity={12} />
          <TypeItem name="Copos" quantity={23} />
        </Categories>
        <Box container px={1}>
          <Grid container maxWidth="1000px">
            <CardItem
              key={1}
              name="Caneca"
              price="99,99"
              img="./imgs/logo.png"
              description="Canaca ilustrada"
            />
          </Grid>
        </Box>


      </Grid>
    </Container>
  )
}
export default HomePage;