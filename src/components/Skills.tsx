import styled from "styled-components";
import ReactIcon from "../assets/atom-symbol.png";
import TypeScript from "../assets/typescript.png";
import Node from "../assets/java-script.png";
import Mongo from "../assets/icons8-mongodb.svg";
import Postgreesql from "../assets/icons8-postgreesql.svg";
import Redux from "../assets/icons8-redux.svg";
import Git from "../assets/icons8-git.svg";
import HTML from "../assets/icons8-html-5.svg";
import CSS from "../assets/icons8-css3.svg";

const Skills = (): JSX.Element => {
  return (
    <SkillsComponent id="skills">
      <Container>
        <Flex>
          <h1>HABILIDADES</h1>
          <ListSkills>
            <SkillCard>
              <ImgCardSkill src={ReactIcon} alt="Icone React" />
              <TitleSkill>React JS</TitleSkill>
              <DescriptionSkill>+ 2 anos de experiência</DescriptionSkill>
            </SkillCard>
            <SkillCard>
              <ImgCardSkill src={TypeScript} alt="Icone TypeScript" />
              <TitleSkill>Typescript</TitleSkill>
              <DescriptionSkill>+ 1 ano de experiência</DescriptionSkill>
            </SkillCard>
            <SkillCard>
              <ImgCardSkill src={Node} alt="Icone Node" />
              <TitleSkill>Node JS</TitleSkill>
              <DescriptionSkill>+ 6 meses de experiência</DescriptionSkill>
            </SkillCard>
            <SkillCard>
              <ImgCardSkill src={Mongo} alt="Icone Mongo" />
              <TitleSkill>Mongo</TitleSkill>
              <DescriptionSkill>+ 6 meses de experiência</DescriptionSkill>
            </SkillCard>
            <SkillCard>
              <ImgCardSkill src={Postgreesql} alt="Icone Postgreesql" />
              <TitleSkill>PostgreSQL</TitleSkill>
              <DescriptionSkill>+ 6 meses de experiência</DescriptionSkill>
            </SkillCard>
            <SkillCard>
              <ImgCardSkill src={Redux} alt="Icone Redux" />
              <TitleSkill>Redux</TitleSkill>
              <DescriptionSkill>+ 1 ano de experiência</DescriptionSkill>
            </SkillCard>
            <SkillCard>
              <ImgCardSkill src={Git} alt="Icone Git" />
              <TitleSkill>Git</TitleSkill>
              <DescriptionSkill>+ 2 anos de experiência</DescriptionSkill>
            </SkillCard>
            <SkillCard>
              <ImgCardSkill src={HTML} alt="Icone HTML" />
              <TitleSkill>HTML</TitleSkill>
              <DescriptionSkill>+ 2 anos de experiência</DescriptionSkill>
            </SkillCard>
            <SkillCard>
              <ImgCardSkill src={CSS} alt="Icone CSS" />
              <TitleSkill>CSS</TitleSkill>
              <DescriptionSkill>+ 2 anos de experiência</DescriptionSkill>
            </SkillCard>
          </ListSkills>
        </Flex>
      </Container>
    </SkillsComponent>
  );
};

export default Skills;

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
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
`;

const Flex = styled.div`
  width: 100%;
  text-align: center;
`;

const SkillsComponent = styled.div`
  width: 100%;
  padding-top: 0px;
  h1 {
    color: ${(props) => props.theme.colors.black};
    font-size: 52px;
    line-height: 56px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const ListSkills = styled.ul`
  list-style: none;
  display: flex;
  padding-bottom: 100px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const SkillCard = styled.li`
  max-width: 300px;
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 20px rgb(231 231 231);
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  margin-right: 20px;
  margin-top: 40px;
  :hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const ImgCardSkill = styled.img`
  object-fit: contain;
  max-width: 50px;
  width: 100%;
`;

const TitleSkill = styled.p`
  font-size: 20px;
  line-height: 24px;
  padding-top: 20px;
  font-weight: 500;
`;

const DescriptionSkill = styled.div`
  padding-top: 40px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  line-height: 30px;
  font-weight: 300;
`;
