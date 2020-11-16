import React from 'react';
import { RiSpaceShipLine } from 'react-icons/ri';
import { CardContainer, Stops, Ukn } from './styles';

interface SpaceshipCardProps{
    name: string;
    stops: number;
    mglt: string;
}

const SpaceshipCard: React.FC<SpaceshipCardProps> = (props) => {
  const { name, stops, mglt } = props;

  return (
    <CardContainer>
      <RiSpaceShipLine size={40} />
      <div>
        <p>
          Modelo:
          {' '}
          <strong>{name}</strong>
        </p>
        {(mglt === 'unknown') ? (<Ukn>Velocidade desconhecida</Ukn>) : (
          <p>
            Paradas Necessárias:
            {' '}
            <Stops>{stops}</Stops>
          </p>
        )}

      </div>
    </CardContainer>
  );
};

export default SpaceshipCard;
