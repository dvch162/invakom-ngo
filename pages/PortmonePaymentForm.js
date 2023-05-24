import { useState } from 'react';
import { deflate } from 'pako';
import { encode } from 'js-base64';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function PortmonePaymentForm() {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email,
      amount
    };
    const jsonData = JSON.stringify(data);
    const compressedData = deflate(jsonData);
    const base64Data = encode(compressedData);
    const url = `https://www.portmone.com.ua/r3/uk/autoinsurance?i=${base64Data}`;
    router.push(url);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Amount:
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <button type="submit">Pay</button>
      </form>
    </Layout>
  );
}
