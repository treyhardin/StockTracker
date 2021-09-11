import React, { useState, useEffect } from 'react';
import './StockCard.css';

function StockCard(props) {

    const apiKey = 'M2H83Y2ZKJPNO06T'; 
    const functionName = 'TIME_SERIES_DAILY_ADJUSTED';
    const interval = 5;

    let [stock, setStock] = useState(null);
    let [equity, setEquity] = useState('0');
    let [dividend, setDividend] = useState('0');
    let [price, setPrice] = useState('0');



    useEffect(() => {

        const getEquity = ( currentPrice, shares ) => {
           return (currentPrice * shares).toFixed(2);
        }

        const getEquityChange = ( currentPrice, shares, avgPrice ) => {
            let equityCalc = (
                (shares * currentPrice) - (shares * avgPrice)
            )
           return equityCalc.toFixed(2);
        }
    
        const getDividend = (stockData) => {
            return parseInt(stockData["Time Series (Daily)"]["2021-09-10"]["7. dividend amount"]).toFixed(2);
        }
    
        const getPrice = (stockData) => {
            return parseInt(stockData["Time Series (Daily)"]["2021-09-10"]["4. close"], 10).toFixed(2);
        }

        if (stock) {
            setDividend( getDividend(stock) );
            setPrice( getPrice(stock) );
            setEquity( getEquity( getPrice(stock), props.shares) );
        } else {

            fetch(`https://www.alphavantage.co/query?function=${functionName}&symbol=${props.symbol}&interval=${interval}min&apikey=${apiKey}`)
                .then(response => response.json() ).then(data => {
                    setStock(data);
                })
        }

            
    }, [stock])

    if (stock) {

        return (
            <tr className="StockCard">
                <td>
                    <p className='u-h2'>{props.symbol}</p>
                    <p className='utility color-subdued'>{props.shares} x {props.avgPrice}</p>
                </td>
                <td>
                    <p>${equity}</p>
                    <p className='utility color-primary'>{equity - (price * props.shares)}</p>
                </td>
                <td>
                    <p>{dividend}%</p>
                    <p className='utility color-subdued'>${(dividend * equity) / 12} / Month</p>
                </td>
                <td>
                    <p>${price}</p>
                    <p className='utility color-primary'>(+{(props.avgPrice - price) / props.avgPrice}%)</p>
                </td>
                
            </tr>
        )

    } else {

        return (
            <tr className="StockCard">
                <td>Symbol</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
            </tr>
        )
        
    }

}

export default StockCard;
