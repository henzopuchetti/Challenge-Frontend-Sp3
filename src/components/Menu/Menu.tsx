import { BiHomeAlt } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiBookHeart } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";
import { StyledMenu, StyledMenuItem, StyledWrapperMenu } from "./Menu.style";
import { Link } from "react-router-dom";

export const Menu = () => {
    return(
        <StyledMenu>
            <StyledWrapperMenu>
                <StyledMenuItem>
                    <BiHomeAlt size="1.5rem" color="#38aede"/>
                    <Link to="/">Inicio</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <BiSearch size="1.5rem" color="#38aede"/>
                    <Link to="/busca">Busca</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <BiBookHeart size="1.5rem" color="#38aede"/>
                    <Link to="#">Favoritos</Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <BiSolidUserCircle size="1.5rem" color="#38aede"/>
                    <Link to="/perfil">Perfil</Link>
                </StyledMenuItem>
            </StyledWrapperMenu>
        </StyledMenu>
    )
}