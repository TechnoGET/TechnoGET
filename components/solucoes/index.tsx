import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

export function Solucoes() {
  return (
    <section
      id="solucoes"
      className="md:px-24 px-4 h-dvh flex flex-col justify-center items-center"
    >
      <h1 className="md:text-5xl text-2xl md:pt-50 pt-120 font-medium text-center mb-10">
        Softwares que se adaptam a <span className="text-primary">você</span>
      </h1>

      <div className="md:grid grid-cols-3 gap-5 md:space-y-0 space-y-2">
        <Card>
          <CardHeader>
            <CardTitle>Agendamentos Online</CardTitle>
            <CardDescription>
              Ideal para barbearias, salões, manicures, clinicas, etc
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Tenha um sistema personalizado com a sua identidade e informações
            </p>

            <ul className="list-disc pt-4 px-5 text-sm">
              <li>Maior facilidade para seus clientes</li>
              <li>Notificações em tempo real</li>
              <li>Painel de gerenciamento de agendas</li>
              <li>Métricas mensais</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sistema de divulgação</CardTitle>
            <CardDescription>
              Ideal para imobiliárias, concessionárias, etc
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Tenha um sistema personalizado para seus anúncios
            </p>
            <br />
            <ul className="list-disc pt-4 px-5 text-sm">
              <li>Gerencie seus anuncios com facilidade</li>
              <li>Notificações em tempo real</li>
              <li>Notificações para visitas</li>
              <li>Identidade visual da sua empresa</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sobre medida</CardTitle>
            <CardDescription>
              Precisando de um sistema para outra finalidade?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Entre em contato com nosso time! </p>
            <p>
              Desenvolvemos software para qualquer solução que você precise !
            </p>
          </CardContent>
        </Card>
      </div>
      <Button size="lg" className="text-base mt-5 w-1/2 text-black">
        <a href="https://wa.me/5511921660920" target="_blank">
          Fale com um consultor
        </a>
      </Button>
      <footer className="w-full h-[70px] mt-30 py-7 bg-[#1f1f1f] flex items-center justify-center text-white">
        © Techno<span className="text-primary">GET</span>
      </footer>
    </section>
  );
}
