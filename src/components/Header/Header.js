import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    //const cartIcon= <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />;
    const cart=props.cart;
    const headerStyle = {
        color: 'white',
        backgroundColor: 'black',
        padding: '25px'
    };
    const bannerStyle = {
        padding:'75px'
    };
    const cost= cart.reduce((sum,each)=>sum+parseFloat(each.price),0);
    const tax=cost*.15;
    const total=tax+cost;
    const [cartStyle, setCartStyle]=useState({display:'none'});
    function oneClick(){
        const someStyle = {
            display:'none'
        }
        setCartStyle(someStyle);
    }
    function twoClick(){
        const someStyle2 = {
            display:'block'
        }
        setCartStyle(someStyle2);
    }
    return (
        <div>
            <div className='row d-flex justify-content-between' style={headerStyle}>
                <div className='col-6 text-start'>
                    <h1>Course Kinun</h1>
                </div>
                <div className="col-3 text-end">
                    {cart.length}
                    <FontAwesomeIcon icon={faCartShopping} size='2x' onClick={()=>{oneClick()}} onDoubleClick={()=>{twoClick()}} />
                </div>
            </div>
            <div className="cart-section" style={cartStyle}>
                <p>Order Price: <big>{cost.toFixed(2)}</big></p>
                <p>Tax Amount: <big>{tax.toFixed(2)}</big></p>
                <p>Total Amount: <big>{total.toFixed(2)}</big></p>
            </div>
            <div className="banner" style={bannerStyle}>
                <h1>For Quick Designing,</h1>
                <h1>there is <span className='text-success'>Bootstrap</span></h1>
                <FontAwesomeIcon icon={faPlayCircle} className='text-success' size='2x' style={{margin:'50px'}} />
            </div>
        </div>
    );
};

export default Header;