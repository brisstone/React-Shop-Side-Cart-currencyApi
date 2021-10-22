import React from 'react';


export default function CurrencyOption(props) {
    const {
        data,
        currency1,
        onChangeCurrency1,
      
    } = props
    return (
        <div>
           

            <select className="selectOption" value={currency1} onChange={onChangeCurrency1}>

                {data.rates.map((option) => (<option className="currencyOption" key={option.currency} value={option.currency}>{option.currency}</option>))

                }
            </select>

        </div>
    )
}
