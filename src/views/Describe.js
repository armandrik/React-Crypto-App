import React from 'react'
import { getCoinId } from '../services/axiosGet'
import { BarChart } from './BarChart'
import { LineChart } from './LineChart'
import { Table } from './Table'


export const Describe = ({ coinId }) => {

  const [coin, setCoin] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    (async () => {
      setIsLoading(true)
      const result = await getCoinId(coinId)
      setCoin(result.data)
      setIsLoading(false)
    })();
  }, [])

  return (
    <>
      {isLoading ? <h1 className='loading'>loading . . . <div className="loader"></div></h1> :
        <div className='coin-id-container'>
          <div className='label'>
            {coin.image ? <img src={coin.image.small} className='coinId-img'/> : <span>-</span>}
            <h3>{coin.name} - <span>{coin.symbol}</span></h3>
          </div>
          <h4 className='category'><span>category : </span> {coin.categories}</h4>
          <div className='infoId'>
            {coin.market_data ? <h4>Price  {coin.market_data.current_price.usd.toLocaleString()}$</h4> : <span>-</span>}
            <h4>Market Rank {coin.market_cap_rank}</h4>
          </div>
          <div className='high-low'>
            {coin.market_data ? <h4 className='high'>24h high : {coin.market_data.high_24h.usd.toLocaleString()}$</h4> : <span>-</span>}
            {coin.market_data ? <h4 className='low'>24h low : {coin.market_data.low_24h.usd.toLocaleString()}$</h4> : <span>-</span>}
          </div>
          <LineChart info={coin}/>
          <BarChart info={coin}/>
          <Table info={coin}/>
          <div className='describtion'>
            <h4 className='about'>About</h4>
            {coin.description ? <p>{coin.description.en}</p> : <span>-</span>}
          </div>
        </div>
      }
    </>
  )
}
