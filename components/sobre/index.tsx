import Image from 'next/image';

export function Sobre() {
  return (
    <section
      id="sobre"
      className="md:px-24 px-4 h-dvh bg-[#1f1f1f] md:flex justify-between items-center"
    >
      <div className="bg-white md:rounded-full md:block hidden">
        <Image src="/logo1.png" alt="logo" width={400} height={400} />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="md:text-5xl text-3xl md:pt-0 pt-25 font-medium">
          Sobre a Techno<span className="text-primary">GET</span> <br />
        </h1>
        <p className="text-lg">
          Somos uma softhouse focada em sites personalizados e sistema de
          agendamentos.
        </p>
        <p className="text-lg">
          Prezamos pela qualidade na entrega e pelo bom atendimento na pós !{' '}
          <br />
          Suporte 24 horas disponível para sempre atender da melhor forma !
        </p>
      </div>

      <div className="relative">
        {' '}
        <Image
          src="/home_image2.png"
          alt="Logo TechnoGET"
          width={300}
          height={300}
          className="shadow-sm shadow-gray-700 rounded-sm absolute right-8 top-30 pointer-events-none z-10 lg:hidden block"
        />
        <Image
          src="/home_image1.png"
          alt="Logo TechnoGET"
          width={300}
          height={300}
          className="shadow-sm shadow-gray-700 rounded-sm absolute right-24 top-45 pointer-events-none z-20 lg:hidden block"
        />
      </div>
    </section>
  );
}
