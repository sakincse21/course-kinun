import React from 'react';
import './Cards.css';

const Cards = (props) => {
    const { title, link, description, image, price, provider } = props.courseInfo;
    //console.log(props.courseInfo);
    
    return (
        <div className="card my-3" style={{ width: '270px' }}>
            <div className='text-center'>
                <img className="card-img-top py-2 card-image" src={image} alt='...' />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"><small className="text-muted">by </small>{provider}</p>
                <p><big className='text-muted'>${price}</big></p>
                <button className='btn btn-outline-dark btn-success text-white' onClick={()=>{
                    props.handleClick(props.courseInfo);
                }}>Buy Now</button>
            </div>
        </div>
    );
};

export default Cards;