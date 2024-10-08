import React from 'react'
import axios, { headers } from 'axios'
import { useState } from 'react'
import fig_1 from './refressh.png';

const Quote = () => {
    const [[quotee], setQuotee] = useState([{
        quote: "The will of man is his happiness.",
        author: "Friedrich Schiller"
    }]);

    const api_url = 'https://api.api-ninjas.com/v1/quotes?category=happiness'
    const new_quote = () => {

        axios.get(api_url, { headers: { 'X-Api-Key': 'gxptlp5tlkldEShebiTkiQ==vN1a2p6afCDvodpT' } }
        ).then((response) => {
            setQuotee(response.data)
            console.log(response.data)
        }).catch((error) => {
            alert(error.response.data.message)
        })
    }
    return (
        <div className='quote_gen'>
            <div className='thought'>
                <p className='bold'>Thought of the Day</p>
                <button onClick={new_quote}>
                    <img src={fig_1} alt='refresh icon' height='20px' width='20px' />
                </button>
            </div>
            <div className='quote'>
                <p>{quotee.quote}</p>
            </div>
            <p className='on_right'>{quotee.author}</p>
        </div>

    )
}

export default Quote