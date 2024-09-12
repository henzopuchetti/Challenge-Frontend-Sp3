import React from 'react';
import { FooterContainer, Logo, FooterLista, FooterItem, FooterLink } from './Footer.style';
import logo from '../../assets/Captura_de_tela_2024-05-22_101428-removebg-preview.png'

// Componente Footer
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Logo src={logo} />
      <FooterLista>
        <FooterItem><FooterLink to="/">Home</FooterLink></FooterItem>
        <FooterItem><FooterLink to="/login">Login</FooterLink></FooterItem>
        <FooterItem><FooterLink to="/chatbot">Chatbot</FooterLink></FooterItem>
        <FooterItem><FooterLink to="/chamados">Chamado</FooterLink></FooterItem>
        <FooterItem><FooterLink to="/integrantes">Integrantes</FooterLink></FooterItem>
      </FooterLista>
    </FooterContainer>
  );
}

export default Footer;
