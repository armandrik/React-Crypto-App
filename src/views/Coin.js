import React from 'react'
import { Link } from 'react-router-dom';

export const Coin = ({ id, rank, name, symbol, img, volume , price, getId }) => {

    const getInfo = () => {
        const postId = id;
        getId(postId)
    }

    return (
        <Link to='/describe' className='coin-container' onClick={() => getInfo(id)}>
            <div className='coin-info-tabel'>
                <h3>{rank}</h3>
                <img src={img} className='home-img'/>
                <div className='info'>
                    <h4>{name}</h4>
                    -
                    <span>{symbol}</span>
                </div>
                <h3>volume : {volume.toLocaleString()}$</h3>
                <h3 className='price-info'>price : {price.toLocaleString()}$</h3>
            </div>
        </Link>
    )
}
