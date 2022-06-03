import React from "react"
import Brand from "./components/brand"
import Rating from "./components/rating"
import Offer from "./components/offers"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




export default function Filter() {



    const filter = [ {
        key: 1,
        name: "Brand",
        tag: <Brand />,
        panel: "panel1",
    }, {
        key: 2,
        name: "Ratings",
        tag: <Rating />,
        panel: "panel2",
    }, {
        key: 3,
        name: "Discounts",
        tag: <Offer />,
        panel: "panel3",
    }]

    const val = filter.map((current) => {

        return (
            <Accordion key={current.key}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${current.panel}a-content`}
                    id={`${current.panel}a-header`}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {current.name}
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    {current.tag}
                </AccordionDetails>
            </Accordion>)
    })
    return (
        <>
            {val}

        </>
    )
}