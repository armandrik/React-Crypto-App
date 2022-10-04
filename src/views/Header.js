import React from 'react'

export const Header = ({findeCoin}) => {

    const findeItem = (e)=>{
        findeCoin(e);
    }

    return (
        <div className='header'>
            <div className='header-title'>
                <h1>Crypto App</h1>
                <img src="https://img.icons8.com/external-soft-fill-juicy-fish/60/228BE6/external-bitcoin-banking-soft-fill-soft-fill-juicy-fish.png" className='header-icon' />
            </div>
            <div className='search-box'>
                <input type='text' id='search' className='form__field' onChange={(e) => findeItem(e)} autocomplete="off"/>
                <label htmlFor='search' className="form__label">Search</label>
            </div>
        </div>
    )
}
