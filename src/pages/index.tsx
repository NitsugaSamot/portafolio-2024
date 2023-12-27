import Image from 'next/image';
import Header from '@/components/header/Header';
import Nav from '@/components/nav/Nav';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex flex-grow  items-center justify-center">
        <Image
          src="img/tom-1.svg"
          alt="Mi Imagen"
          width={500}
          height={300}
          className="mt-4 md:mt-0" // Ajuste de margen en dispositivos medianos y grandes
        />
        <Nav />
      </div>

      
    </main>
  );
}

