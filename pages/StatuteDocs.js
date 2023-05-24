import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function StatuteDocs() {
  return (
    
    <div>
      <Header />
      <h1>Статутні документи Громадської організації</h1>
      <p>
Громадська організація IHBAKOM займається захистом прав oci6 з інвалідністю, a y зв&apos;язку із воєнним станом, акцент діяльності змістився на адресну допомогу, яку потребують особи з інвалідністю, їх опікуни та піклувальники, що полягає y допомозі продуктами харчування, ліками, товарами особистого вжитку, для недопущення гуманітарної кризи.	
        </p>
      <ul>
        <li>
          <Link href="https://www.dropbox.com/s/hxc5al3lxdrmv3i/%D0%A1%D1%82%D0%B0%D1%82%D1%83%D1%82%20%D0%93%D0%9E%20%22%D0%86%D0%9D%D0%92%D0%90%D0%9A%D0%9E%D0%9C%22.pdf?dl=0">
            Завантажити статут
          </Link>
        </li>
        <li>
          <Link href="https://www.dropbox.com/s/kwwka2rpbn4j00z/%D0%92%D0%B8%D0%BF%D0%B8%D1%81%D0%BA%D0%B0%20%D0%B7%20%D0%84%D0%94%D0%A0%20%D0%86%D0%BD%D0%B2%D0%B0%D0%BA%D0%BE%D0%BC.pdf?dl=0">
            Завантажити виписку з ЄДР
          </Link>
        </li>
        <li>
          <Link href="https://www.dropbox.com/s/sat16i0n3hj6lb4/%D0%A0%D1%96%D1%88%D0%B5%D0%BD%D0%BD%D1%8F%20%D0%BD%D0%B5%D0%BF%D1%80%D0%B8%D0%B1%D1%83%D1%82%D0%BA%D0%BE%D0%B2%D1%96%D1%81%D1%82%D1%8C.pdf?dl=0">
            Завантажити довідку про неприбутковість
          </Link>
        </li>
      </ul>
      <Footer />
    </div>

    
  );
}
