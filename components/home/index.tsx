import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="md:px-24 px-4 h-dvh flex justify-between items-center">
      <div className="flex flex-col gap-5">
        <h1 className="md:text-5xl text-3xl font-medium">
          Soluções em <span className="text-primary">Software</span> <br />e
          agendamentos <span className="text-primary">online</span>
        </h1>
        <p className="md:text-lg text-base">
          Personalização de sites, soluções para agendas 24hrs <br />e muito
          mais
        </p>
        <div className="flex sm:gap-5 gap-3">
          <Button className="text-base flex-1" variant="outline">
            <Link href="#solucoes">Saiba mais</Link>
          </Button>

          <Button className="text-base flex-1 text-black">
            <a
              href="https://wa.me/5511921660920"
              target="_blank"
              className="flex-1"
            >
              Fale com um consultor
            </a>
          </Button>
        </div>
      </div>

      <Image
        src="/home_image2.png"
        alt="Logo TechnoGET"
        width={500}
        height={500}
        className="shadow-sm shadow-gray-700 rounded-sm absolute right-48 top-50 pointer-events-none z-10 lg:block hidden"
      />
      <Image
        src="/home_image1.png"
        alt="Logo TechnoGET"
        width={500}
        height={500}
        className="shadow-sm shadow-gray-700 rounded-sm absolute right-24 top-80 pointer-events-none z-20 lg:block hidden"
      />
    </main>
  );
}
