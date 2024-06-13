import React, { useState } from 'react';

export default function CurrConv() {
    const [amount, setAmount] = useState(0);
    const [fromCurr, setFromCurr] = useState('');
    const [toCurr, setToCurr] = useState('');
    const usdToInrExc = 83.51;
    const inrToUsdExc = 0.012;

    const convcurr = (event) => {
        event.preventDefault();
        let convamnt;
        if (fromCurr === 'USD' && toCurr === 'INR') {
            convamnt = amount * usdToInrExc;
            alert(`Converted amount: ${convamnt}`);
        } else if (fromCurr === 'INR' && toCurr === 'USD') {
            convamnt = amount * inrToUsdExc;
            alert(`Converted amount: ${convamnt}`);
        } else {
            alert('Give different currency')
        }
    };

    return (
        <div>
            <form onSubmit={convcurr}>
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(event) => setAmount(event.target.value)} 
                    required 
                />
                <select value={fromCurr} onChange={(event) => setFromCurr(event.target.value)} required>
                    <option value="">Choose</option>
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                </select>
                <select value={toCurr} onChange={(event) => setToCurr(event.target.value)} required>
                    <option value="">Choose</option>
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
