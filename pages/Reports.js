import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Reports() {
  return (
    
    <div>
      <Header />
      <h1>Звіти про результати діяльності Громадської організації</h1>
      <h2>Прозорість діяльності як принцип!</h2>
      <p>
Громадська організація ІНВАКОМ займається захистом прав осіб з інвалідністю. займається захистом прав осіб з інвалідністю.
Прозорість та підзвітність є основними рисами діяльності нашої організації.        </p>
      <ul>
        <li>
          <Link href="https://www.dropbox.com/s/hxc5al3lxdrmv3i/%D0%A1%D1%82%D0%B0%D1%82%D1%83%D1%82%20%D0%93%D0%9E%20%22%D0%86%D0%9D%D0%92%D0%90%D0%9A%D0%9E%D0%9C%22.pdf?dl=0">
            Завантажити  звітність за 2021 рік
          </Link>
        </li>
        <li>
          <Link href="https://www.dropbox.com/s/m0vvij2wml5w0ow/%D0%97%D0%B2%D1%96%D1%82%20%D0%BF%D1%80%D0%BE%20%D0%B2%D0%B8%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%20%D0%B4%D0%BE%D1%85%D0%BE%D0%B4%20%D0%93%D0%9E%2021.pdf?dl=0">
            Завантажити  звітність за 2022 рік
          </Link>
        </li>
      </ul>
      <Footer />
    </div>

    
  );
}
