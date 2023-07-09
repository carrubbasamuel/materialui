import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Badge, Box, Button, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleCart } from '../redux/api';


export default function Navbar() {
    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.api)
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backdropFilter: 'blur(8px)', background: 'rgba(0, 0, 0, 0.2)' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>News</Link>
                    </Typography>
                    <Button color="inherit" onClick={()=> dispatch(toggleCart())}>
                        <Badge badgeContent={cart.length} color="secondary">
                          <ShoppingCartIcon />
                        </Badge>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>

    )
}