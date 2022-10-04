import React from 'react'
import { Link } from 'react-router-dom';

export const EnterPage = () => {
    return (
        <header className="enter-page">
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main home-h">Crypto App</span>
                    <span className="heading-primary-sub">Discover The Blockchain World</span>
                    <img src="https://img.icons8.com/external-soft-fill-juicy-fish/60/228BE6/external-bitcoin-banking-soft-fill-soft-fill-juicy-fish.png" />
                    <span className='author'>Author Drik</span>
                </h1>
                <Link to='/main' className="btn btn-white btn-animated">Visit The App</Link>
            </div>
        </header>
    )
}
