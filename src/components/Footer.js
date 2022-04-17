import styled from "styled-components";
import Restaurante from "./img/restaurante.png"
import PizzaIcon from "./img/pizzares.png"

const Container = styled.div`
  margin: 150px 8vw 0 8vw;
  display: flex;
  height: 500px;
  @media(max-width: 1200px){
    margin-top: 350px;
  }
  @media(max-width: 1080px){
    flex-direction: column;
    align-items: center;
  }
  @media(max-width: 600px){
    margin-top: 1050px;
  }
`
const RestauranteImg = styled.img`
  width: 450px;
  height: 500px;
  @media(max-width: 640px){
    width: 310px;
  }
`
const Title = styled.h2`
  font-size: 4vh;
  color: #2E2E2E; 
  @media(max-width: 1200px){
    font-size: 3.5vh;
  }

`
const TCY = styled.span`
  color: #DBAB0D;
`
const TCR = styled.span`
  color: #83132c;
`
const TCG = styled.span`
  color: darkgreen;

`
const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 0 5vw;
`
const About = styled.p`
  margin-top: 30px;
  text-align: center;
  font-size: 1.8vh;
  font-weight: 500;
  color: #2E2E2E;
  width: 60%;
  @media(max-width: 1200px){
    font-size: 1.6vh;
  }
`



function Footer() {
  return(
      <Container>
        <RestauranteImg src={Restaurante} alt="Imagem do Restaurante"/>
        <AboutUs>
          <Title>Sobre La P<TCY>i</TCY><TCR>z</TCR><TCG>z</TCG>a</Title>
          <About>Em tempos de alta competitividade, principalmente no segmento de alimentação, procuramos nos diferenciar pela QUALIDADE do produto e em nosso atendimento, para não sermos apenas mais uma pizzaria. Por isso só trabalhamos com MASSA FRESCA, ou seja, a massa é feita todos os dias e permanece resfriada até o momento do pedido, quando, aí sim, é aberta e recheada com ingredientes selecionados de alta qualidade e assada em genuíno FORNO A LENHA a mais de 400º C.</About>
        </AboutUs>
      </Container>
  );
}

export default Footer;