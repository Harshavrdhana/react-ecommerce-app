import React from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from "react-router-dom"
import delImgUrl from "../assets/images/shop/del.png"
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
    const [cartItems, setCartItems] = React.useState([]);

    React.useEffect(() => {
        //fetch cart data from local storage
        const storedCardItems = JSON.parse(localStorage.getItem("cart")) || []
        setCartItems(storedCardItems)
    }, [])

    //calculate prices
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity
    }

    //handle quantity increase
    const handleIncrese = (item) => {
        item.quantity += 1
        setCartItems([...cartItems])

        //update local storage with new item
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }

    //handle quantity decrease
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItems([...cartItems])
            //update local storage with new item
            localStorage.setItem("cart", JSON.stringify(cartItems))
        }
    }

    //handle item remove

    const handleRemoveItem = (item) => {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id)

        //update new cart
        setCartItems(updatedCart)
        updateLocalStorage(updatedCart)
    }

    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item)
    }, 0
    )

    //order Total
    const orderTotal = cartSubtotal;

    return (
        <div>
            <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />

            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        {/* cart top */}

                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>

                                {/* table body */}
                                <tbody>
                                    {
                                        cartItems.map((item, i) => (
                                            <tr key={i}>
                                                <td className='product-item cat-product'>
                                                    <div className='p-thumb'>
                                                        <Link to="/shop"><img src={item.img} alt="" /></Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link>{item.name}</Link>
                                                    </div>
                                                </td>
                                                <td className='cat-price'>
                                                    ${item.price}
                                                </td>
                                                <td className='cat-quantity'>
                                                    <div className="cart-plus-minus">
                                                        <div
                                                            className="dec qtybutton"
                                                            onClick={() => handleDecrease(item)}
                                                        >-</div>
                                                        <input
                                                            type='text'
                                                            className='cart-plus-minus-box'
                                                            name="qtybutton"
                                                            value={item.quantity}
                                                        />
                                                        <div
                                                            className="inc qtybutton"
                                                            onClick={() => handleIncrese(item)}
                                                        >+</div>
                                                    </div>
                                                </td>
                                                <td className='cat-toprice'>${calculateTotalPrice(item)}</td>
                                                <td className='cat-edit'>
                                                    <a href="#" onClick={() => handleRemoveItem(item)}>
                                                        <img src={delImgUrl} alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        {/* card top ends */}
                        <div className="cart-bottom">
                            {/* check out box */}
                            <div className='cart-checkout-box'>
                                <form className='coupon'>
                                    <input
                                        className='cart-page-input-text'
                                        type="text"
                                        name='coupon'
                                        id='coupon'
                                        placeholder='Coupon code....'
                                    />
                                    <input
                                        type="submit"
                                        value={"Apply Coupon"}
                                    />
                                </form>
                                <form className='cart-checkout'>
                                    <input
                                        type="submit"
                                        value="Update Cart"
                                    />
                                    <div>
                                        <CheckOutPage/>
                                    </div>
                                </form>
                            </div>
                            {/* check out box ends */}

                            {/* Shopping box */}
                            <div className="shiping-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3>calculate Shipping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="uk">United Kingdom</option>
                                                    <option value="ind">India</option>
                                                    <option value="bd">bangladesh</option>
                                                    <option value="np">Nepal</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>

                                            <div className="outline-select shiping-select">
                                                <select>
                                                    <option value="ind">New Delhi</option>
                                                    <option value="uk">New York</option>
                                                    <option value="bd">Dhaka</option>
                                                    <option value="pak">Karachi</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                name="postalCode"
                                                id="postalCode"
                                                className='cart-page-input-text'
                                                placeholder='PostCode/ZIP'
                                            />
                                            <button type='submit'>Update Total</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                            <h3>Cart Totals</h3>
                                            <ul className='lab-ul'>
                                                <li>
                                                    <span className='pull-left'>Cart Subtotal</span>
                                                    <p className='pull-right'>${cartSubtotal}</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Shipping and Handling</span>
                                                    <p className='pull-right'>Free Shipping</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Order Total</span>
                                                    <p className='pull-right'>$ {orderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CartPage