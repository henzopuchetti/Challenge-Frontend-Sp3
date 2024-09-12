import React from 'react';
import { QuemSomosContainer, QuemSomosTitulo, QuemSomosParagrafo } from './QuemSomos.style';

const QuemSomos: React.FC = () => {
  return (
    <QuemSomosContainer>
      <QuemSomosTitulo>Quem Somos</QuemSomosTitulo>
      <QuemSomosParagrafo>
        Somos uma equipe comprometida em revolucionar o setor de serviços automotivos. Nosso foco está em oferecer soluções
        inovadoras que não apenas simplificam os processos de reparo de veículos, mas também os tornam mais eficientes e
        acessíveis para todos os clientes. Com uma abordagem orientada ao cliente, visamos transformar a experiência de
        quem utiliza serviços automotivos, eliminando as complexidades tradicionais do setor. Trabalhamos em parceria
        com a Porto, uma empresa renomada e de vasta experiência no ramo automotivo. Juntos, buscamos entregar serviços
        de alta qualidade, combinando confiabilidade, transparência e agilidade, para que nossos clientes se sintam
        plenamente seguros e satisfeitos com cada etapa do processo.
      </QuemSomosParagrafo>
    </QuemSomosContainer>
  );
};

export default QuemSomos;
