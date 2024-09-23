import { lusitana } from '@/app/ui/fonts';
import Logo from '../../public/logo.png'
import Image from 'next/image';

export default function PetshopLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image alt='Logo'
        src={Logo}
        width={50}
        height={50}
        style={{
          borderRadius: '50%',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          // filter: 'grayscale(0.1) opacity(0.7)'
        }}
      />
      <p className="text-[44px]" >GJNV</p>
    </div>
  );
}
