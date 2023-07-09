import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart, toggleCart } from '../redux/api';


import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: (theme) => theme.palette.primary.main,
    borderRadius: '30px',
    boxShadow: 24,
    color: 'white',
    p: 4,
};

const styledBox = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px',
    padding: '10px',
    borderRadius: '30px',
    backgroundColor: 'white',
    color: 'black',
    boxShadow: 3,
    '&:hover': {
        boxShadow: 6,
        transition: '0.3s',
        animationFillMode: 'forwards'
    },
}

export default function TransitionsModal() {
    const dispatch = useDispatch();
    const { isCartOpen, cart } = useSelector(state => state.api);
    const handleClose = () => dispatch(toggleCart());

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isCartOpen}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={isCartOpen}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Cart
                        </Typography>
                        {
                            cart && cart.map(item => {
                                return <>

                                    <Button sx={{bgcolor: 'red', borderRadius: '15px'}} onClick={() => dispatch(removeCart(item))}>X</Button>

                                    <Box sx={styledBox}>
                                        <img src={item.images[0]} alt={item.title} style={{ width: '100px', height: '100px'}} />
                                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant='h2'>{item.title}</Typography>
                                            <Typography>{item.price}</Typography>
                                        </Box>
                                    </Box>


                                </>

                            })
                        }

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}