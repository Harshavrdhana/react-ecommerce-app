import React from 'react'
import {Link } from "react-router-dom"

const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos incidunt omnis iure placeat, nemo voluptatum quis minus alias voluptatibus architecto totam cupiditate"

const ProductDisplay = ({ item }) => {
    const { name, id, price, seller, ratingsCount, quantity, img } = item

    const [preQuantity, setQuantity] = React.useState(quantity)
    const [coupon, setCoupon] = React.useState("Select Size")
    const [size, setSize] = React.useState("Select Size")
    const [color, setColor] = React.useState("Select Color")

    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    const handleIncrease = () => {
        setQuantity(prev => prev + 1)
    }

    const handleDecrease = () => {
        if (preQuantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const product ={
            id:id,
            img:img,
            name:name,
            price:price,
            quantity:preQuantity,
            size:size,
            color:color,
            coupon:coupon
        }

        const existingCart= JSON.parse(localStorage.getItem("cart"))||[];
        const existingProductIndex = existingCart.findIndex((item)=>item.id === id);
         
        if(existingProductIndex !== -1){
            existingCart[existingProductIndex].quantity +=preQuantity
        }else{ 
            existingCart.push(product);
        }
        //update local storage

        localStorage.setItem("cart",JSON.stringify(existingCart))
        
        //Reset form page

        setQuantity(1)
        setSize("Select Size")
        setColor("Select Color")

    }

    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className='rating'>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <span>{ratingsCount} review</span>
                </p>
                <h4>${price}</h4>
                <h6>{seller}</h6>
                <p>{desc}</p>
            </div>

            {/* cart component */}

            <div>
                <form onSubmit={handleSubmit}>
                    {/* size */}
                    <div className='select-product size'>
                        <select value={size} onChange={handleSizeChange} >
                            <option>Select Size</option>
                            <option>SM</option>
                            <option>MD</option>
                            <option>LG</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    {/* color */}
                    <div className='select-product color'>
                        <select value={color} onChange={handleColorChange}>
                            <option>Select Color</option>
                            <option>Pink</option>
                            <option>Ash</option>
                            <option>Red</option>
                            <option>White</option>
                            <option>Blue</option>
                            <option>Black</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    {/* cat */}
                    <div className='cart-plus-minus'>
                        <div
                            className='dec qtybutton'
                            onClick={handleDecrease}
                        >-</div>
                        <input
                            className='cart-plus-minus-box'
                            type="text"
                            name="qtybutton"
                            id="qtybutton"
                            value={preQuantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
                        <div
                            className='inc qtybutton'
                            onClick={handleIncrease}
                        >+</div>

                        {/* coupon field */}
                    </div>
                    <div className="discount-code mb-2">
                        <input
                            type="text"
                            placeholder='Enter Discount Code'
                            onChange={(e) => setCoupon(e.target.value)}
                        />
                    </div>
                    {/* btn section */}

                    <button type='submit' className='lab-btn'>
                        <span>Add to cart</span>
                    </button>
                    <Link to="/cart-page" className="lab-btn bg-primary">
                        <span>Check Out</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ProductDisplay 