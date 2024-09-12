import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #02C2FF;
  height: 100vh;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
  font-style: normal;
`;

export const FormLoginContainer = styled.form`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 300px;
`;

export const FormLoginTitulo = styled.h1`
  width: 90%;
  font-size: 20px;
  text-align: center;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 700;
  font-style: normal;
`;

export const FormLoginInputLabel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLoginLabel = styled.label`
  font-size: 15px;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 700;
  font-style: normal;
`;

export const FormLoginInput = styled.input`
  height: 25px;
  width: 265px;
  border-radius: 8px;
  border: 1px solid #747474;
  padding-left: 10px;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 12px;
`;

export const FormLoginA = styled.div`
  margin-bottom: 20px;
`;

export const FormLoginLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  color: #02C2FF;
`;

export const FormLoginBotao = styled(Link)`
  width: 200px;
  height: 25px;
  border: none;
  border-radius: 8px;
  background-color: #02C2FF;
  color: white;
  font-size: 15px;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
  font-style: normal;
  margin: 0 auto;
  text-align: center;
`;
