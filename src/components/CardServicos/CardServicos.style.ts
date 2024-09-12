
import styled from 'styled-components';

export const CardContainer = styled.div<{ corDeFundo: string; corTexto: string }>`
  background-color: ${(props) => props.corDeFundo};
  width: 90%;
  height: 180px;
  border-radius: 10px;
  margin-top: 20px;
  border: 1px solid lightgray;
  padding: 10px;
  color: ${(props) => props.corTexto};
`;

export const CardServicoTitulo = styled.h3`
  font-size: 25px;
  margin-left: 10px;
  margin-bottom: 5px
`;

export const CardServicoDescricao = styled.p`
  font-size: 15px;
  margin-left: 10px;
  width: 95%;
`;

export const CardServicoBotao = styled.button<{ corDeFundo: string; corTexto: string }>`
  border: none;
  border-radius: 20px;
  width: 100px;
  height: 25px;
  background-color: ${(props) => props.corDeFundo};
  color: ${(props) => props.corTexto};
  font-size: 13px;
  margin-left: 10px;
  margin-top: 10px;
`;
