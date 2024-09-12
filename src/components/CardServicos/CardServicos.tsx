// src/components/CardServico/CardServico.tsx
import React from 'react';
import { CardContainer, CardServicoTitulo, CardServicoDescricao, CardServicoBotao } from './CardServicos.style';

interface CardServicoProps {
  titulo: string;
  descricao: string;
  corDeFundo: string;
  corTexto: string;
  botaoTexto: string;
}

const CardServico: React.FC<CardServicoProps> = ({ titulo, descricao, corDeFundo, corTexto, botaoTexto, }) => {
  return (
    <CardContainer corDeFundo={corDeFundo} corTexto={corTexto}>
      <CardServicoTitulo>{titulo}</CardServicoTitulo>
      <CardServicoDescricao>{descricao}</CardServicoDescricao>
      <CardServicoBotao corDeFundo={corTexto} corTexto={corDeFundo}>{botaoTexto}</CardServicoBotao>
    </CardContainer>
  );
};

export default CardServico;
