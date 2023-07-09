import Avatar from '@mui/material/Avatar';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart, toggleCart } from '../redux/api';


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


export default function ModalCart() {
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
                sx={{
                    overflow: 'scroll',
                }}
            >
                <Fade in={isCartOpen}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h2" component="h2">
                            Cart
                        </Typography>
                        {
                            cart && cart.map(item => {
                                return <>

                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        margin: '10px',

                                    }}>
                                        <Avatar alt="Nome immagine" src={item.images[0]} sx={{ width: 100, height: 100, borderRadius: 3 }} />
                                        <Box >
                                            <Typography id="transition-modal-description" sx={{ mt: 2 }} variant="h4" color='text.main' component="h2">
                                                {item.title}
                                            </Typography>
                                            <Typography id="transition-modal-description" sx={{ mt: 2 }} variant="subtitle1" color='text.main' component="h2">
                                                {item.price} $
                                            </Typography>
                                            <Box sx={
                                                {
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    alignSelf: 'end',
                                                    padding: '5px 20px',
                                                    color: 'text.main',
                                                    borderRadius: '30px',
                                                    boxShadow: 3,
                                                }
                                            }
                                                variant="contained"
                                            >
                                                <Button onClick={() => dispatch(removeCart(item))} variant="contained">-</Button>
                                                <Typography id="transition-modal-description" sx={{ m: 2 }} variant="h5" component="h2">
                                                    {item.amount}
                                                </Typography>
                                                <Button onClick={() => dispatch(addCart(item))} variant="contained">+</Button>
                                            </Box>

                                        </Box>

                                    </Box>
                                    <hr style={{margin: '20px 0'}} />

                                </>
                            })

                        }
                        <Typography id="transition-modal-description" sx={{ mt: 2 }} variant="h4" color='text.main' component="h2">
                            Total: {cart.reduce((acc, item) => acc + item.price * item.amount, 0)} $
                        </Typography>
                        
                    </Box >
                </Fade>
            </Modal>
        </div>
    );
}