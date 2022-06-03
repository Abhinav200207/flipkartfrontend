import { CircularProgress } from "@mui/material";
import "./style/card.css";

export default function Card({ product }) {

    return product.loading ? (<CircularProgress/>) : (
        <div>{
            product.message && product.message.products.length > 0 ? (
                <div className="cardList">
                    {
                        product.message.products.map((card) => (
                            <div className="card" key={card._id}>
                                <div className="image">
                                    <img src={card.imageurl} alt="" />
                                    <div className="heart"></div>
                                </div>
                                <div className="details">
                                    <div className="title"><b>{card.name}</b></div>
                                    <div className="ratings">
                                        <div className="ratings-star">{`${card.rating}`}{`★`}</div>
                                        <div className="ratings-no">{`(${card.numberofratings})`}</div>
                                    </div>
                                    <div className="price">
                                        <div className="discount-price">{`₹ ${(card.price - ((card.price * card.discount) / 100))}`}</div>
                                        <div className="actual-price">{`₹ ${card.price}`}</div>
                                        <div className="discount-percentage">{`${card.discount}%`}</div>

                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            ) : (
                <div>No Items To Show</div>
            )
        }
        </div>
    )
}