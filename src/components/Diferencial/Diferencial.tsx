import React from 'react';
import { DiferencialContainer, DiferencialTitulo, DiferencialParagrafo } from './Diferencial.style';

const Diferencial: React.FC = () => {
  return (
    <DiferencialContainer>
      <DiferencialTitulo>O que nos diferencia?</DiferencialTitulo>
      <DiferencialParagrafo>
        O diferencial que nos destaca no mercado está na sinergia entre tecnologia de ponta e um atendimento altamente personalizado.
        Acreditamos que a experiência do cliente pode ser transformada por meio de soluções inteligentes, e por isso criamos um site
        que oferece mais do que uma simples interface de serviços: ele permite que os clientes enviem fotos e descrições detalhadas
        os problemas de seus veículos, proporcionando diagnósticos antecipados e orçamentos precisos, antes mesmo de irem à oficina.
        Além disso, nosso chatbot integrado é projetado para otimizar o processo de diagnóstico ao identificar padrões e prever falhas
        comuns com base nas características do veículo. Isso resulta em uma comunicação mais clara e previsível, poupando tempo e
        tornando a experiência de reparo muito mais tranquila e eficiente.
      </DiferencialParagrafo>
    </DiferencialContainer>
  );
};

export default Diferencial;
