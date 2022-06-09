import styled from "styled-components";
import TransformaImg from "../assets/transforma.png";
import Link from "../assets/link.png";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import GitHub from "../assets/github.png";
import Chosen from "../assets/chosen.png";
import AtStorage from "../assets/atstorage.png";
import Cookenu from "../assets/cookenu.png";
import FestMioloMole from "../assets/festmiolomole.png";

const Portifolio = (): JSX.Element => {
  return (
    <PortfolioComponent id="portifolio">
      <h1>portifólio</h1>
      <Container>
        <ListProject>
          <Project>
            <ImgCard src={FestMioloMole} />
            <TitleCard>LP Doutores da Alegria</TitleCard>
            <ResumeCard>
              <DescriptionTitle>Descrição :</DescriptionTitle>
              <DescriptionCard>
                Uma Landing page + checkout para o festival do miolo do mole
                onde arrecadou doações para crianças e adolescentes que estão em
                hospitais.
              </DescriptionCard>
              <TagsStyled>
                <Tags>JavaScript</Tags>
                <Tags>HTML</Tags>
                <Tags>CSS</Tags>
                <Tags>jQuery</Tags>
              </TagsStyled>
              <ButtonCardStyled>
                <a
                  onClick={() => window.open("http://sls-landing-page-festivalmiolomole.s3-website.us-east-1.amazonaws.com")}
                >
                  <ButtonWebSite>
                    <CardImg src={Link} alt="link" />
                    Website
                  </ButtonWebSite>
                </a>
              </ButtonCardStyled>
            </ResumeCard>
          </Project>
          <Project>
            <ImgCard src={TransformaImg} />
            <TitleCard>Transforma Brasil</TitleCard>
            <ResumeCard>
              <DescriptionTitle>Descrição :</DescriptionTitle>
              <DescriptionCard>
                O Transforma Brasil é uma plataforma nacional de voluntariado e
                engajamento cívico que tem como visão transformar o Brasil
                através dos cidadãos. Um sistema completo com perfis de
                voluntários e de idealizadores de projetos.
              </DescriptionCard>
              <TagsStyled>
                <Tags>typescript</Tags>
                <Tags>React</Tags>
                <Tags>Redux</Tags>
                <Tags>MySQL</Tags>
                <Tags>PHP</Tags>
              </TagsStyled>
              <ButtonCardStyled>
                <a onClick={() => window.open("https://transformabrasil.com.br/")}>
                  <ButtonWebSite>
                    <CardImg src={Link} alt="link" />
                    Website
                  </ButtonWebSite>
                </a>
              </ButtonCardStyled>
            </ResumeCard>
          </Project>

          <Project>
            <ImgCard src={Chosen} />
            <TitleCard>Chosen (Escolhido)</TitleCard>
            <ResumeCard>
              <DescriptionTitle>Descrição :</DescriptionTitle>
              <DescriptionCard>
                A Plataforma é um projeto de iniciativa onde as crianças podem
                entrar, se cadastrarem e escolherem seus doadores, essa é a
                chance que elas tem para escolher seus caminhos para o futuro.
              </DescriptionCard>
              <TagsStyled>
                <Tags>typescript</Tags>
                <Tags>React</Tags>
                <Tags>Redux</Tags>
                <Tags>MySQL</Tags>
                <Tags>PHP</Tags>
              </TagsStyled>
              <ButtonCardStyled>
                <a href="https://visaomundial.org/escolhido/" target="_blank">
                  <ButtonWebSite>
                    <CardImg src={Link} alt="link" />
                    Website
                  </ButtonWebSite>
                </a>
              </ButtonCardStyled>
            </ResumeCard>
          </Project>

          <Project>
            <ImgCard src={AtStorage} />
            <TitleCard>AT Storage</TitleCard>
            <ResumeCard>
              <DescriptionTitle>Descrição :</DescriptionTitle>
              <DescriptionCard>
                Projeto pessoal onde desenvolvi um sistema de armazenamento de
                receitas e ingredientes.
              </DescriptionCard>
              <TagsStyled>
                <Tags>JavaScript </Tags>
                <Tags>RxJS </Tags>
                <Tags>Google Maps </Tags>
                <Tags>jQuery </Tags>
              </TagsStyled>
              <ButtonCardStyled>
                <ButtonPrivate>Projeto Privado</ButtonPrivate>
              </ButtonCardStyled>
            </ResumeCard>
          </Project>

          <Project>
            <ImgCard src={Cookenu} />
            <TitleCard>Cookenu</TitleCard>
            <ResumeCard>
              <DescriptionTitle>Descrição :</DescriptionTitle>
              <DescriptionCard>
                Uma plataforma onde o usuario pode logar com e-mail e senha e
                cadastrar uma nova receita, ao acessar a página inicial ele
                retorna todas as receitas cadastradas na plataforma.
              </DescriptionCard>
              <TagsStyled>
                <Tags>typescript</Tags>
                <Tags>React</Tags>
                <Tags>Node JS</Tags>
                <Tags>MongoDB</Tags>
              </TagsStyled>
              <ButtonCardStyled>
                <a
                  href="https://github.com/feliipedev/Cookenu-backend"
                  target="_blank"
                >
                  <ButtonGitHub>
                    <CardImg src={GitHub} alt="botão do github" />
                    Github
                  </ButtonGitHub>
                </a>
              </ButtonCardStyled>
            </ResumeCard>
          </Project>
        </ListProject>
      </Container>
    </PortfolioComponent>
  );
};

export default Portifolio;

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
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
    width: 83%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const PortfolioComponent = styled.section`
  margin-top: 144px;
  width: 100%;
  padding-top: 94px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: ${(props) => props.theme.colors.black};
    font-size: 52px;
    line-height: 56px;
    font-weight: 600;
    text-transform: uppercase;
  }
  @media screen and (max-width: 600px) {
    padding-top: 0;
  }
`;

const ListProject = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin-top: 40px;
  .swiper {
    width: 360px;
    height: 655px;
    padding-bottom: 20px;
  }
`;

const Project = styled.div`
  padding: 12px 20px 20px 20px;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 20px rgb(231 231 231);
  border-radius: 6px;
  margin-top: 40px;
  @media only screen and (max-width: 1380px) {
    padding: 12px 10px 0px 10px;
  }
  @media only screen and (max-width: 1300px) {
    padding: 12px 10px 0px 10px;
  }
  :hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const ImgCard = styled.img`
  object-fit: contain;
  max-width: 296px;
  width: 100%;
  height: 208px;
  cursor: pointer;
`;

const TitleCard = styled.p`
  font-size: 18px;
  line-height: 22px;
  padding-top: 12px;
  font-weight: 500;
`;

const DescriptionTitle = styled.p`
  font-size: 18px;
  line-height: 22px;
  padding-top: 12px;
  font-weight: 500;
`;

const ResumeCard = styled.div`
  text-align: left;
  padding-top: 20px;
  @media only screen and (max-width: 1380px) {
    padding: 20px 10px 20px 10px;
  }
`;

const DescriptionCard = styled.p`
  padding-top: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  line-height: 20px;
  font-weight: 300;
  height: 200px;
`;

const TagsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tags = styled.button`
  border-radius: 4px;
  font-weight: 500;
  background: #9baec2;
  color: ${(props) => props.theme.colors.white};
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  border: none;
  padding: 2px 6px;
  text-transform: uppercase;
  margin-top: 12px;
  margin-right: 10px;
`;

const ButtonCardStyled = styled.div`
  margin-top: 40px;
  display: flex;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const ButtonWebSite = styled.button`
  border: none;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 8px 16px;
  border-radius: 6px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const ButtonGitHub = styled.button`
  border: none;
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding: 8px 16px;
  border-radius: 6px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const ButtonPrivate = styled.button`
  border: none;
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  padding: 8px 16px;
  border-radius: 6px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: not-allowed;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const CardImg = styled.img`
  object-fit: contain;
  max-width: 16px;
  margin-right: 12px;
`;
