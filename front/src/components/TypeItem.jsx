import { ListItem, ListItemText } from '@mui/material';
import React from 'react';

const TypeItem = ({name, quantity}) => {
  return (
    <>
      <ListItem>
        <ListItemText
          primary={name}
          secondary={quantity}
        />
      </ListItem>
    </>
  );
}

export default TypeItem;