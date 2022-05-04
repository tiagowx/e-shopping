import React from 'react';
import { Container, Grid } from '@mui/material'
import Categories from '../components/Categories';
import TypeItem from '../components/TypeItem';
import CardItem from '../components/CardItem';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const products = useSelector(state => state.products);

  const allCategories = "".concat(products.map(
    item => item.categories
  ))
  console.log(allCategories);

  const categories = allCategories.split(",")
    .filter((item, index, arr) => {
      return arr.indexOf(item, index + 1) === -1
    });

  return (
    <Container maxWidth="xl" >
      <Grid container >
        <Categories flex="1">
          {categories.map((item, index) =>
            <TypeItem key={index} name={item} />
          )}
        </Categories>
        <Grid container flex="1">
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


      </Grid>
    </Container>
  )
}

export default HomePage;