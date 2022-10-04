import React from 'react'

export const Table = ({info}) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>1h</th>
                        <th>24h</th>
                        <th>7d</th>
                        <th>14d</th>
                        <th>30d</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {info.market_data ? <td className={info.market_data.price_change_percentage_1h_in_currency.usd > 0 ? 'high' : 'low'}>{info.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</td> : null}
                        {info.market_data ? <td className={info.market_data.price_change_percentage_24h_in_currency.usd > 0 ? 'high' : 'low'}>{info.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</td> : null}
                        {info.market_data ? <td className={info.market_data.price_change_percentage_7d_in_currency.usd > 0 ? 'high' : 'low'}>{info.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</td> : null}
                        {info.market_data ? <td className={info.market_data.price_change_percentage_14d_in_currency.usd > 0 ? 'high' : 'low'}>{info.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%</td> : null}
                        {info.market_data ? <td className={info.market_data.price_change_percentage_30d_in_currency.usd > 0 ? 'high' : 'low'}>{info.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</td> : null}
                    </tr>
                </tbody>
            </table>
        </>
    )
}
