import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/api";
import MediaCard from "./Carta";



const StyledGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
))

export default function Griglia() {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.api)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    return (
        <StyledGrid container spacing={2} sx={3}>

            {data && data.map(item => <MediaCard item={item} key={item.title} />)}

        </StyledGrid>

    )
}