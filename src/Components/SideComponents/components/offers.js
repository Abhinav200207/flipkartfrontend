import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export default function Offer() {
    return (
        <>
            <FormGroup>
                <FormControlLabel  control={<Checkbox />} label="0%-10%" />
                <FormControlLabel  control={<Checkbox />} label="10%-20%" />
                <FormControlLabel  control={<Checkbox />} label="20%-30%" />
                <FormControlLabel  control={<Checkbox />} label="30%-40%" />
                <FormControlLabel  control={<Checkbox />} label="40%-50%" />
                <FormControlLabel  control={<Checkbox />} label="50%-60%" />
                <FormControlLabel  control={<Checkbox />} label="60%-70%" />
                <FormControlLabel  control={<Checkbox />} label="70%-80%" />
                <FormControlLabel  control={<Checkbox />} label="80%-90%" />
                <FormControlLabel  control={<Checkbox />} label="90%-100%" />
            </FormGroup>
        </>
    )
}