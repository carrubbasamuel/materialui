import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../redux/api';


export default function Navbar() {
    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.api)
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backdropFilter: 'blur(8px)', background: 'rgba(0, 0, 0, 0.2)' }}>
                <Toolbar>
                    <IconButton

                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
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