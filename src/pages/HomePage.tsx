import styled from "styled-components";
import Linkedin from "../assets/linkedin.png";
import Seta from "../assets/seta-direita.png";
import GithubSvg from "../assets/icons8-github.svg";
import Header from "components/Header";
import Home from "components/Home";
import Portifolio from "components/Portifolio";
import Services from "components/Services";
import Skills from "components/Skills";
import Contact from "components/Contact";

const HomePage = (): JSX.Element => {
  return (
    <ScreenContainer>
      <Header />
      <Home />
      <ArrowDown>
        <a href="#portifolio">
          <IconImg src={Seta} alt="seta" />
        </a>
      </ArrowDown>
      <Portifolio />
      <Services />
      <Skills />
      <Contact />
      <Footer>
        <a onClick={() => window.open("https://github.com/feliipedev")} target="_blank">
          <ImgFooter src={GithubSvg} alt="icone github" />
        </a>
        <a
          onClick={() => window.open("https://www.linkedin.com/in/felipe-monteiro-561a33130/")}
        >
          <ImgFooter src={Linkedin} alt="icone linkedin" />
        </a>
      </Footer>
    </ScreenContainer>
  );
};

export default HomePage;

const ScreenContainer = styled.div`
  font-family: ${(props) => props.theme.text.title.fontFamily};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;
  background: #fafafa;
`;

const IconImg = styled.img`
  max-width: 28px;
  object-fit: contain;
  padding-top: 163px;
  cursor: pointer;
`;

const ArrowDown = styled.div`
  animation-name: slide;
  padding-top: 60px;
  animation: slide 1s ease-in-out infinite;
  @keyframes slide {
    0%,
    100% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(0, 15px);
    }
  }
  @media screen and (max-width: 600px) {
    padding-top: 00px;
  }
`;

const Footer = styled.div`
  padding: 40px;
  width: 100%;
  background: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
`;

const ImgFooter = styled.img`
  object-fit: contain;
  cursor: pointer;
  max-width: 50px;
  width: 100%;
  padding-right: 20px;
`;
