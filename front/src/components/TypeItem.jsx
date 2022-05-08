import { Checkbox, ListItem, ListItemText } from '@mui/material';
import React from 'react';

const TypeItem = ({ key, name, checked, typeShirtId, onClick }) => {
  return (
    <>
      <ListItem button onClick={onClick}>
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={key}
          inputProps={{ 'aria-labelledby': typeShirtId }}
        />
        <ListItemText primary={name} />
      </ListItem>
    </>
  );
}

export default TypeItem;