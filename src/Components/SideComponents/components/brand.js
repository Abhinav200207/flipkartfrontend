import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react'
import { changeLink, countElement, getProduct } from "../../../Actions/ProductAction";
import { useDispatch, useSelector } from "react-redux"


let array = [];
export default function Brand() {
    const dispatch = useDispatch();

    const { link } = useSelector((state) => state.linkReducer);

    const fun = (n) => {
        if (array.indexOf(n) === -1) {
            array.push(n);
        } else {
            array.splice(array.indexOf(n), 1)
        }
        dispatch(changeLink(link, "brand", n, countElement(array, n)));
    }


    useEffect(() => {
        dispatch(getProduct(link))
    }, [dispatch, link])


    return (
        <>


            <TextField
                id="input-with-icon-textfield"

                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
                placeholder='Search Brand'
            />
            <FormGroup>
                <FormControlLabel onChange={()=>fun("A")} control={<Checkbox />} label="A" />
                <FormControlLabel onChange={()=>fun("B")} control={<Checkbox />} label="B" />
                <FormControlLabel onChange={()=>fun("C")} control={<Checkbox />} label="C" />
                <FormControlLabel onChange={()=>fun("D")} control={<Checkbox />} label="D" />
                <FormControlLabel onChange={()=>fun("E")} control={<Checkbox />} label="E" />
            </FormGroup>
        </>
    )
}