import React, { useEffect, useState } from 'react';
import {
  Title, Logo, Form, Subtitle, Container, SpaceshipsWrapper, Instructions, Info,
} from './styles';
import LogoImg from '../../assets/logo.svg';
import SpaceshipCard from '../../components/SpaceshipCard';
import { CalculateStops } from '../../services/calculator';
import SpaceshipCardLoading from '../../components/SpaceshipCardLoading';
import { getAllShips } from '../../services/api';

interface ShipData {
    MGLT: string;
    cargo_capacity: number;
    name: string;
    model: string;
    passengers: number;
    manufacturer: string;
    consumables: string;
    distance: number;
}

const Dashboard: React.FC = () => {
  const [ships, setShips] = useState<ShipData[]>([]);
  const [distance, setDistance] = useState<string>('1000000');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getStarships = async () => {
    const spaceshipsData = await getAllShips();
    setShips(spaceshipsData);
    setIsLoading(false);
  };

  useEffect(() => {
    getStarships();
  }, []);
  function handleCalculateStops(mglt: number, consumables: string) {
    const stops = CalculateStops(mglt, consumables, parseInt(distance, 10));
    return stops;
  }
  function handlePreventLetters(e:React.KeyboardEvent<HTMLInputElement>) {
    if (((e.keyCode < 48) || (e.keyCode > 57)) && e.keyCode !== 8) {
      e.preventDefault();
    }
  }
  function handleChangeDistance(e:React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value !== '') {
      setDistance(e.target.value);
    } else {
      setDistance('0');
    }
  }
  return (
    <Container>
      <Instructions>
        <Logo src={LogoImg} alt="Spaceship calculator" />
        <Title>Programe suas paradas antes de inicar sua viagem interplanetaria!</Title>
        <Subtitle>Insira a distancia a ser percorrida em MGLT</Subtitle>
        <Form>
          <input
            value={distance}
            type="number"
            onChange={(e) => handleChangeDistance(e)}
            onKeyDown={(e) => handlePreventLetters(e)}
          />
        </Form>
        <Info>
          Nosso calculo é feito com base na quantidade de consumiveis
          suportado pela espaçonave e pela sua velocidade. Caso alguma
          dessas informações seja desconhecida não é possivel determinar
          o numero de paradas! 🚀
        </Info>
      </Instructions>
      <SpaceshipsWrapper>
        { (isLoading === true)
          ? <SpaceshipCardLoading />
          : ships.map((ship) => (
            <SpaceshipCard
              name={ship.name}
              key={ship.name}
              mglt={ship.MGLT}
              stops={handleCalculateStops(parseInt(ship.MGLT, 10), ship.consumables)}
            />
          ))}
      </SpaceshipsWrapper>
    </Container>
  );
};

export default Dashboard;
