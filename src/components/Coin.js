import React from 'react'

function Coin({icon,name,price,symbol,websiteUrl}) {
  return (
    <div className='coin'>
        <img src={icon}/>
        <h1>Name: {name}</h1>
        <h3>Price: {price}</h3>
        <h3>Symbol: {symbol}</h3>
        <h3>Website Url : {websiteUrl}</h3>
    </div>
  )
}

export default Coin;
