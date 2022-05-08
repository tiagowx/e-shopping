import React, { useState } from 'react';
import { Container, Grid } from '@mui/material'
import Categories from '../components/Categories';
import TypeItem from '../components/TypeItem';
import CardItem from '../components/CardItem';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const products = useSelector(state => state.products);

  const [filters, setFilters] = useState([]);

  const allCategories = "".concat(products.map(
    item => item.category
  ))

  const categories = allCategories.split(",")
    .filter((item, index, arr) => {
      return arr.indexOf(item, index + 1) === -1
    });

  function handlerFilter(item) {
    let list = [];
    if (!filters.includes(item)) {
      list = [...filters];
      list.push(item);
    } else {
      list = filters.filter((value) => value !== item);
    }
    setFilters(list);
  }

  return (
    <Container maxWidth="xl">
      <Grid container mt="8px"mb="64px">
        <Categories flex="1">
          {categories.sort().map((item, index) =>
            <TypeItem
              key={index}
              name={item}
              onClick={() => handlerFilter(item)}
              checked={filters.includes(item)}
            />
          )}
        </Categories>
        <Grid container flex="1">
          {products.filter(filtered => filters.includes(filtered.category) || filters.length === 0).map(item => (
            <CardItem
              key={item.id}
              product={item}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage;