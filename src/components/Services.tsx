import styled from "styled-components";
import Iphone from "../assets/iphone-smartphone.png";
import Notebook from "../assets/notebook.png";
import Servidor from "../assets/servidor.png";
import TelaPc from "../assets/tela-de-computador.png";
import DevImg from "../assets/dev.svg";

const Services = (): JSX.Element => {
  return (
    <ServicesComponent id="services">
      <h1>SERVIÇOS</h1>
      <Container>
        <ListServices>
          <CardService>
            <ImgCardService src={TelaPc} alt="Icone tela de computador" />
            <TitleService>Criação de Website</TitleService>
            <DescriptionService>
              Desenvolvimento de sites profissionais, sistemas web, blogs e
              lojas online com foco em resultados.
            </DescriptionService>
          </CardService>
          <CardService>
            <ImgCardService src={Notebook} alt="Icone notebook" />
            <TitleService>Sites Responsivos</TitleService>
            <DescriptionService>
              Criação de sites responsivos para melhor visualização em
              dispositivos móveis com qualidade em todas as telas.
            </DescriptionService>
          </CardService>
          <CardService>
            <ImgCardService src={Servidor} alt="Icone servidor" />
            <TitleService>Desenvolvimento de APIs</TitleService>
            <DescriptionService>
              Desenvolvendo APIs usando tecnologias modernas como node e REST.
              Sempre com um código bom e limpo.
            </DescriptionService>
          </CardService>
          <CardService>
            <ImgCardService src={Iphone} alt="Icone celular" />
            <TitleService>Aplicações Mobile</TitleService>
            <DescriptionService>
              Desenvolvimento de aplicativos multiplataforma, utilizando
              modernos como React Native e Firebase.
            </DescriptionService>
          </CardService>
        </ListServices>
        <Img src={DevImg} />
      </Container>
    </ServicesComponent>
  );
};

export default Services;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 1900px) {
    width: 90%;
  }
  @media screen and (max-width: 1380px) {
    width: 80vw;
    justify-content: center;
  }
  @media screen and (max-width: 1250px) {
    width: 90%;
    justify-content: center;
  }

  @media screen and (max-width: 1050px) {
    width: 90%;
    justify-content: center;
  }
  @media screen and (max-width: 870px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const ServicesComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  h1 {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.black};
    font-size: 52px;
    line-height: 56px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const ListServices = styled.ul`
  list-style: none;
  display: flex;
  padding-top: 20px;
  padding-bottom: 300px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 600px) {
    padding-top: 80px;
    flex-direction: column;
    justify-content: center;
  }
`;

const CardService = styled.li`
  width: 100%;
  max-width: 300px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 20px rgb(231 231 231);
  border-radius: 15px;
  padding: 20px 20px 25px 20px;
  text-align: center;
  margin-right: 20px;
  margin-top: 40px;
  :hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  @media screen and (max-width: 870px) {
    margin-top: 40px;
  }
`;

const ImgCardService = styled.img`
  object-fit: contain;
  max-width: 50px;
  width: 100%;
`;

const TitleService = styled.p`
  font-size: 20px;
  line-height: 24px;
  padding-top: 20px;
  font-weight: 500;
`;

const DescriptionService = styled.div`
  padding-top: 40px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  line-height: 30px;
  font-weight: 300;
`;

const Img = styled.img`
  width: 100%;
  max-width: 500px;
  margin-top: 100px;
  @media screen and (max-width: 870px) {
    max-width: 400px;
    margin-top: 50px;
    margin-bottom: 100px;
  }
  animation-name: slide;
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
`;
