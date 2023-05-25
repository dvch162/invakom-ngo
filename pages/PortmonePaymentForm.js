import { useState } from 'react';
import { deflate } from 'pako';
import { encode } from 'js-base64';
import { useRouter } from 'next/router';

export default function PortmonePaymentForm() {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('uah'); // Default currency is UAH
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email,
      amount,
      currency,
    };
    const jsonData = JSON.stringify(data);
    const compressedData = deflate(jsonData);
    const base64Data = encode(compressedData);
    const url = `https://www.portmone.com.ua/r3/uk/autoinsurance?i=${base64Data}`;
    router.push(url);
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h1>Підтримайте нашу місію!</h1>
      <div className="row">
        <label>
          Ел. пошта:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Кількість:
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <label>
          Валюта:
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="uah">UAH</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>
        </label>
        <button type="submit">Сплатити</button>
      </div>
      <style jsx>{`
        .payment-form {
          display: flex;
          flex-direction: column;
          gap: 5px;
          align-items: flex-start;
        }

        .row {
          display: flex;
          gap: 5px;
        }

        .payment-form h1 {
          margin-bottom: 10px;
          align-self: center;
        }

        @media (max-width: 600px) {
          .payment-form {
            flex-wrap: wrap;
          }

          .payment-form label,
          .payment-form button {
            width: 100%;
          }

          .payment-form button {
            height: 2rem; /* Adjust the height as needed */
          }
        }
      `}</style>
    </form>
  );
}
