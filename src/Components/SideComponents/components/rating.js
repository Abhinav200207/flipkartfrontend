import { useEffect } from 'react'
import { changeLink, countElement, getProduct } from "../../../Actions/ProductAction";
import { useDispatch, useSelector } from "react-redux"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



let array = [];
export default function Rating() {
    const dispatch = useDispatch();

    const { link } = useSelector((state) => state.linkReducer);

    const fun = (n) => {
        if (array.indexOf(n) === -1) {
            array.push(n);
        } else {
            array.splice(array.indexOf(n), 1)
        }
        dispatch(changeLink(link, "rating", n.toString(), countElement(array, n)));
    }


    useEffect(() => {
        dispatch(getProduct(link))
    }, [dispatch, link])
    return (
        <>
            <FormGroup>
                <FormControlLabel onChange={()=>fun(5)} control={<Checkbox />} label="5 ★ and above" />
                <FormControlLabel onChange={()=>fun(4)} control={<Checkbox />} label="4 ★ and above" />
                <FormControlLabel onChange={()=>fun(3)} control={<Checkbox />} label="3 ★ and above" />
                <FormControlLabel onChange={()=>fun(2)} control={<Checkbox />} label="2 ★ and above" />
                <FormControlLabel onChange={()=>fun(1)} control={<Checkbox />} label="1 ★ and above" />
            </FormGroup>
        </>
    )
}