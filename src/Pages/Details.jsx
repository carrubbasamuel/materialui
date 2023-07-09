import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layout';
import { addCart, setSelectionImg } from '../redux/api';

export default function Details() {
    const dispatch = useDispatch();
    const { currentItem } = useSelector((state) => state.api);

    const handleRdx = (item) => {
        dispatch(setSelectionImg(item));
    };

    return (
        <Layout>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'start', marginTop: "200px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '50%', height: '50%' }}>
                    <img src={currentItem.images[currentItem.images.length - 1]} alt={currentItem.title} style={{ width: '500px', height: '500px' }} />
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        width: '50%',
                        marginTop: '20px',
                    }}>
                        {currentItem.images.map((item) => (
                            <img onClick={() => handleRdx(item)} src={item} alt={currentItem.title} style={{ width: '60px' }} />
                        ))}
                    </Box>

                </Box>
                <Typography variant="h2" component="h2" sx={{ gap:3, width: '50%', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'end' }}>
                    <Typography variant="h2" component="h2" sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start' }}>
                        {currentItem.title}
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start' }}>
                        {currentItem.price}
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start' }}>
                        {currentItem.description}
                    </Typography>
                </Typography>

                


                


            </Box>
            <Button onClick={()=>dispatch(addCart(currentItem))} variant="contained" color="primary" sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start' }}>
                    Add to cart
                </Button>
        </Layout>
    );
}
