import styled from "styled-components";
import DevImg from "../assets/dev.png";
import GitHub from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";

const Home = (): JSX.Element => {
  return (
    <HomeComponent id="home">
      <Container>
        <div>
          <Title>
            <H1>Desenvolvedor Web</H1>
            <H2>
              FULLST<strong>ACK {"</>"}</strong>
            </H2>
          </Title>
          <Description>
            Olá, eu me chamo Felipe e seja bem-vindo ao meu portifólio. Comecei
            a programar quando tinha 18 anos. Queria construir um servidor
            pirata no jogo em que eu era fascinado, desde aquele primeiro
            momento com o código eu sabia que era isso que queria da vida
          </Description>
          <FlexContainer>
            <a onClick={() => window.open("https://github.com/feliipedev")}>
              <ButtonSocialNetwork>
                <IconSocialNetwork src={GitHub} />
                Meu Github
              </ButtonSocialNetwork>
            </a>
            <a
              onClick={() => window.open("https://www.linkedin.com/in/felipe-monteiro-561a33130/")}

            >
              <ButtonSocialNetwork>
                <IconSocialNetwork src={Linkedin} />
                Meu Linkedin
              </ButtonSocialNetwork>
            </a>
          </FlexContainer>
        </div>
        <Img src={DevImg} alt="development" />
      </Container>
    </HomeComponent>
  );
};

export default Home;

const HomeComponent = styled.div`
  width: 100%;
  padding-top: 94px;
`;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1900px) {
    width: 90%;
  }
  @media screen and (max-width: 1380px) {
    width: 80vw;
    margin: 0 auto;
    justify-content: center;
  }
  @media screen and (max-width: 1250px) {
    width: 90%;
    margin: 0 auto;
    justify-content: center;
  }

  @media screen and (max-width: 1050px) {
    width: 90%;
    margin: 0px auto;
    justify-content: center;
  }

  @media screen and (max-width: 870px) {
    width: 83%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    max-width: 90%;
  }
`;

const H1 = styled.h1`
  font-size: 52px;
  line-height: 58px;
  font-weight: 600;
  text-transform: uppercase;
  padding-top: 200px;
  color: ${(props) => props.theme.colors.primary};
  @media (max-width: 999px) {
    padding-top: 80px;
  }
  @media screen and (max-width: 600px) {
    font-size: 34px;
    line-height: 44px;
  }
`;
const H2 = styled.h2`
  font-size: 26px;
  line-height: 28px;
  font-weight: 300;
  margin-top: 40px;
  text-transform: uppercase;
  strong {
    font-weight: 600;
    color: ${(props) => props.theme.colors.primary};
  }
  @media screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const Description = styled.p`
  max-width: 600px;
  width: 100%;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 400;
  animation-name: description;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  position: relative;
  @keyframes description {
    from {
      left: -200px;
    }
    to {
      left: 0px;
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const Title = styled.div`
  animation-name: titlePage;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  position: relative;
  @keyframes titlePage {
    from {
      top: -200px;
    }
    to {
      top: 0px;
    }
  }
`;

const Img = styled.img`
  object-fit: contain;
  padding-top: 120px;
  animation-name: imgDev;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  position: relative;
  max-width: 520px;
  width: 100%;
  @media screen and (max-width: 1080px) {
    max-width: 420px;
  }
  @keyframes imgDev {
    from {
      right: -200px;
    }
    to {
      right: 0px;
    }
  }
  @media screen and (max-width: 600px) {
    padding-top: 60px;
  }
`;

const FlexContainer = styled.div`
  position: relative;
  max-width: 520px;
  width: 100%;
  animation-name: buttons;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  @keyframes buttons {
    from {
      bottom: -200px;
    }
    to {
      bottom: 0px;
    }
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
`;
const IconSocialNetwork = styled.img`
  max-width: 18px;
  object-fit: contain;
  margin-right: 8px;
  margin-bottom: -2px;
`;

const ButtonSocialNetwork = styled.button`
  border: none;
  background: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.white};
  padding: 8px 16px;
  border-radius: 8px;
  margin-right: 8px;
  margin-top: 20px;
  cursor: pointer;
  list-style: none;
  :hover {
    background: #8400ff;
  }
`;
