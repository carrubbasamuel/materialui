import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as React from 'react';


const ButtonStyled = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    '&:hover': {
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
    },
}))



export default function MediaCard({ item }) {
  return (
    <Grid item xs={12} sm={6} md={4} sx={{display: 'flex',justifyContent:'center', alignContent:'center'}}>
      <Card sx={{
        maxWidth: 345,
        backdropFilter: 'blur(8px)', // Aggiungi l'effetto blur
        background: 'rgba(255, 255, 255, 0.2)',// Imposta un colore di sfondo traslucido
        boxShadow: 3, // Aggiungi una leggera ombra
        '&:hover': {
            boxShadow: 6, // Al passaggio del mouse aumenta l'ombra
            transform: 'scale(1.05)', // Al passaggio del mouse aumenta la dimensione
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
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonStyled size="small">Share</ButtonStyled>
          <ButtonStyled size="small">Learn More</ButtonStyled>
        </CardActions>
      </Card>
    </Grid>
  );
}
