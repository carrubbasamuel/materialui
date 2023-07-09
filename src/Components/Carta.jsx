import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/api';


const ButtonStyled = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: '30px',
    color: theme.palette.primary.contrastText,
    padding: '5px 10px',
    margin: '5px',
}))



export default function MediaCard({ item }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addCart(item))
  }


  return (
    <Grid item xs={12} sm={6} md={4} sx={{display: 'flex',justifyContent:'center', alignContent:'center'}}>
      <Card sx={{
        maxWidth: 345,
        maxHeight: 500,
        borderRadius: '30px',
        backdropFilter: 'blur(8px)', // Aggiungi l'effetto blur
        background: 'rgba(203, 197, 224, 0.5)',// Imposta un colore di sfondo traslucido
        boxShadow: 3, // Aggiungi una leggera ombra
        '&:hover': {
            boxShadow: 6, // Al passaggio del mouse aumenta l'ombra
            transition: '0.3s',
            animationFillMode: 'forwards' // Aggiungi una transizione
        },
      }}>
        <CardMedia
          sx={{ height: 140 }}
          image={item.images[0]}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.main">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonStyled size="small">Share</ButtonStyled>
          <ButtonStyled size="small">Learn More</ButtonStyled>
          <ButtonStyled sx={{
            backgroundColor: 'green',
            borderRadius: '30px',
            color: 'white',
            alignSelf: 'flex-end',
          }} onClick={handleClick} size="small"><AddShoppingCartIcon /></ButtonStyled>
        </CardActions>
      </Card>
    </Grid>
  );
}
