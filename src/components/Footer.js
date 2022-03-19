import styled from "styled-components";
import Restaurante from "./img/restaurante.png"
import PizzaIcon from "./img/pizzares.png"

const Container = styled.div`
  margin: 100px 5vw 0 5vw;
  display: flex;

  @media(max-width: 1135px){
    margin-top: 450px;
  }
`
const ResImg = styled.img`
  width: 438px;
  height: 500px;
  margin-left: 3vw;
  position: relative;

`
const PizzaImg = styled.img`
  position: absolute;
  left: 2.5vw;
  margin-top: 30px;
`
const About = styled.div`
  width: 500px;
  height: 400px;
  margin: 40px 0 0 130px;
`
const Title = styled.h1`
  color: #2E2E2E;
  font-weight: 600;
  font-size: 5vh;
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
const TextAbout = styled.p`
  margin-top: 30px;
  color: #2E2E2E;
`

function Footer() {
  return(
      <Container>
        <ResImg src={Restaurante}/>
        <PizzaImg src={PizzaIcon}/>

        <About>
          <Title>Sobre a La P<TCY>i</TCY><TCR>z</TCR><TCG>z</TCG>a</Title>
          <TextAbout>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis justo sem. Donec consequat, nunc a dapibus dapibus, justo dolor tristique tortor, sit amet tincidunt lorem nisl at ex. Cras dolor purus, varius in euismod pretium, finibus nec mi. Curabitur aliquam pharetra lectus in pharetra. Nullam viverra elementum neque quis fermentum. </TextAbout>
        </About>
      </Container>
  );
}

export default Footer;