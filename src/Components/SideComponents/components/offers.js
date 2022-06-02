
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export default function Offer() {

    // const handleChange = () => {
    //     setFlag(!flag);  // Flag ki value 0 jab list [] nhi toh 1 jab [1,2,3]
    //     console.log(link);
    //     dispatch(changeLink(link, "rating", encodeURIComponent(JSON.stringify()), flag));


    // }
    return (
        <>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Buy More,Save More" />
                <FormControlLabel control={<Checkbox />} label="No Cost EMI" />
                <FormControlLabel control={<Checkbox />} label="Special Price" />
            </FormGroup>
        </>
    )
}