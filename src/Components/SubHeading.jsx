import { ArrowDropDown } from '@mui/icons-material'
import React from 'react'
import './Subheader.css'

const SubHeading = () => {
    return (
        <div className="subheader">
            <div>
                <span>Electronics</span><ArrowDropDown />
            </div>
            <div>
                <span>TVs & Appliance</span><ArrowDropDown />
            </div>
            <div>
                <span>Men</span><ArrowDropDown />
            </div>
            <div>
                <span>Women</span><ArrowDropDown />
            </div>
            <div>
                <span>Baby & Kids</span><ArrowDropDown />
            </div>
            <div>
                <span>Home & Furniture</span><ArrowDropDown />
            </div>
            <div>
                <span>Sports,Books & More</span><ArrowDropDown />
            </div>
            <span>Flight</span>
            <span>Offer Zone</span>
            <span>Grocery</span>


        </div>
    )
}

export default SubHeading