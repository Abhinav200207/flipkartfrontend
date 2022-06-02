
import "./style/card.css";
export default function Card(){
    const card=[
        {
            "name": "Item 1",
            "price": 100,
            "rating": 4,
            "discount": 10,
            "numberofratings": 100,
            "imageurl": "https://firebasestorage.googleapis.com/v0/b/auth-setup-cdc76.appspot.com/o/files%2FOm7R6fUX3dTP8zM6Nyb3JqFTQOA2%2FNewIntern%2Fim1.jpg?alt=media&token=4c8d013f-6377-4792-b38d-9d661dd3ad48",
            "catogery": 1,
            "brand": "A",
            "pop":1
        },
        {
            "name": "Item 2",
            "price": 1200,
            "rating": 3,
            "discount": 90,
            "numberofratings": 10,
            "imageurl": "https://firebasestorage.googleapis.com/v0/b/auth-setup-cdc76.appspot.com/o/files%2FOm7R6fUX3dTP8zM6Nyb3JqFTQOA2%2FNewIntern%2Fim2.jpg?alt=media&token=9b814385-b90a-4dbf-9fa4-734b00308569",
            "catogery": 2,
            "brand": "A",
            "pop":2
        },
        {
            "name": "Item 3",
            "price": 2200,
            "rating": 5,
            "discount": 32,
            "numberofratings": 350,
            "imageurl": "https://firebasestorage.googleapis.com/v0/b/auth-setup-cdc76.appspot.com/o/files%2FOm7R6fUX3dTP8zM6Nyb3JqFTQOA2%2FNewIntern%2Fim3.jpg?alt=media&token=27f88849-c0e2-45e2-9dfd-b5700f120916",
            "catogery": 2,
            "brand": "A",
            "pop":8
        },
     ]
     const cardList=card.map((card)=>{
         return(
            <div className="card">
            <div className="image">
                <img src={card.imageurl} alt="" />
                <div className="heart"></div>
            </div>
            <div className="details">
                <div className="title"><b>{card.name}</b></div>
                <div className="ratings">
                <div className="ratings-star">{`${card.rating}`}</div>
                <div className="ratings-no">{`(${card.numberofratings})`}</div>
                </div>
                <div className="price">
                    <div className="discount-price">{`₹ ${(card.price-((card.price*card.discount)/100))}`}</div>
                    <div className="actual-price">{card.price}</div>
                    <div className="discount-percentage">{`${card.discount}%`}</div>

                </div>
                
            </div>
        </div>

         )
     })
    return(
        <div className="cardList">{cardList}</div>
    )
}