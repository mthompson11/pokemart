import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  
    return (
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={ lineItem.item.img }
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              { lineItem.item.name }
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous" onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}>
                <RemoveIcon />
            </IconButton>
            <span>{lineItem.qty}</span>
            <IconButton aria-label="next" onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}>
                <AddIcon />
            </IconButton>
          </Box>
        </Box>
      </Card>
    );
  }