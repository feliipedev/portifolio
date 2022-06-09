import styled from "styled-components";
import Oculos from "../assets/oculos-redondos.png";

const Header = (): JSX.Element => {
  const handleMobileMenu = () => {
    const nav = document.querySelector(".nav-list");
    nav?.classList.toggle("active");
  };

  return (
    <HeaderComponent>
      <HeaderC>
        <A href="#home">
          Felipe Monteiro <IconOculos src={Oculos} />
        </A>
        <MenuMobile onClick={() => handleMobileMenu()}>
          <LineOne></LineOne>
          <LineTwo></LineTwo>
          <LineTree></LineTree>
        </MenuMobile>
        <Menu className="nav-list">
          <li>
            <a href="#home">
              <button>Sobre</button>
            </a>
          </li>
          <li>
            <a href="#portifolio">
              {" "}
              <button>Portfólio</button>
            </a>
          </li>
          <li>
            <a href="#services">
              <button>Serviços</button>
            </a>
          </li>
          <li>
            <a href="#skills">
              <button>Skills</button>
            </a>
          </li>
          <li>
            <a href="#contact">
              <button>Contato</button>
            </a>
          </li>
        </Menu>
      </HeaderC>
    </HeaderComponent>
  );
};

export default Header;

const IconOculos = styled.img`
  object-fit: contain;
  max-width: 28px;
  width: 100%;
  margin-left: 12px;
`;

const HeaderC = styled.div`
  max-width: 1400px;
  padding: 30px 0px 30px 0px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 870px) {
    padding: 16px 0px 16px 0px;
  }
`;
const HeaderComponent = styled.header`
  width: 100%;
  box-shadow: 0px 0px 3px rgb(44 44 44 / 27%);
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.white};
  position: fixed;
  z-index: 999;
  .active {
    transform: translateX(0);
  }
  @media (max-width: 999px) {
    padding: 20px;
  }
`;

const A = styled.a`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  animation-name: title;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  @media screen and (max-width: 1500px) {
    padding-left: 50px;
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
    padding: 0;
  }
  @keyframes title {
    from {
      left: -100px;
    }
    to {
      left: 0px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  animation-name: menu;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  position: relative;
  overflow: hidden;
  @keyframes menu {
    from {
      top: -100px;
    }
    to {
      top: 0px;
    }
  }
  button {
    padding: 6px 16px;
    border-radius: 6px;
    border: none;
    background: none;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    text-transform: uppercase;
    margin-right: 10px;
    position: relative;
    :hover {
      color: ${(props) => props.theme.colors.primary};
    }
    :focus {
      color: ${(props) => props.theme.colors.primary};
    }
  }
  @media (max-width: 999px) {
    position: absolute;
    margin-top: 9vh;
    right: 0;
    width: 50vw;
    height: 92vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: ${(props) => props.theme.colors.white};
    transform: translateX(100%);
    transition: transform 0.3s ease-in;
  }
`;

const MenuMobile = styled.div`
  display: none;
  cursor: pointer;
  div {
    width: 32px;
    height: 3px;
    background: ${(props) => props.theme.colors.primary};
    margin: 8px;
  }
  @media (max-width: 999px) {
    display: block;
  }
`;

const LineOne = styled.div``;
const LineTwo = styled.div``;
const LineTree = styled.div``;
