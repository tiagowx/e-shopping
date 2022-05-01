import React from 'react';
import { Box, Container, Grid } from '@mui/material'
import Categories from '../components/Categories';
import TypeItem from '../components/TypeItem';
import CardItem from '../components/CardItem';
import { connect } from 'react-redux';

const HomePage = ({ products }) => {
  console.log(products);
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
          <Grid container maxWidth="400rem">
            {products.map(item => (
              <CardItem
                key={item.id}
                name={item.name}
                price={item.price}
                img={item.image}
                description={item.description}
                categories={item.categories}
              />
            ))}
          </Grid>
        </Box>


      </Grid>
    </Container>
  )
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps)(HomePage);