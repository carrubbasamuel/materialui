import { Paper, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';


const PaperStyled = styled(Paper)(({ theme }) => ({
    margin: '150px auto',
    maxWidth: '500px',
    padding: '50px',
    borderRadius: '30px',
    backdropFilter: 'blur(8px)', // Aggiungi l'effetto blur
    background: 'rgba(203, 197, 224, 0.5)',// Imposta un colore di sfondo traslucido
}
))

export default function Header(){
    return(
        <PaperStyled elevation={3}>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                News
            </Typography>
        </PaperStyled>
    )
}