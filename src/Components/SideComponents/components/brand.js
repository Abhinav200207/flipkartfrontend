import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect } from 'react'
import { changeLink, countElement, getProduct } from "../../../Actions/ProductAction";
import { useDispatch, useSelector } from "react-redux"
import { Autocomplete } from '@mui/material';


const top100Films = [
    { label: 'Item 1', id: 1 },
    { label: 'Item 2', id: 2 },
    { label: 'Item 3', id: 3 },
    { label: 'Item 4', id: 4 },
    { label: 'Item 5', id: 5 },
    { label: 'Item 6', id: 6 },
    { label: 'Item 7', id: 7 },
    { label: 'Item 8', id: 8 },
    { label: 'Item 9', id: 9 },
    { label: 'Item 10', id: 10 },
    { label: 'Item 11', id: 11 },
    { label: 'Item 12', id: 12 },
    { label: "Item 13", id: 13 },
    { label: 'Item 14', id: 14 },
    { label: 'Item 15', id: 15 },
    { label: 'Item 16', id: 16 },
]

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


            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: "100%" }}
                renderInput={(params) => <TextField {...params} label="Search Items" />}
            />
            <FormGroup>
                <FormControlLabel onChange={() => fun("A")} control={<Checkbox />} label="A" />
                <FormControlLabel onChange={() => fun("B")} control={<Checkbox />} label="B" />
                <FormControlLabel onChange={() => fun("C")} control={<Checkbox />} label="C" />
                <FormControlLabel onChange={() => fun("D")} control={<Checkbox />} label="D" />
                <FormControlLabel onChange={() => fun("E")} control={<Checkbox />} label="E" />
            </FormGroup>
        </>
    )
}