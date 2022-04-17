import styled from "styled-components";
import banner from "./img/banner.png";

const Container = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 450px;
  background-image: url(${banner});

  display: flex;
  justify-content: center;
  @media(max-width: 768px){
    height: 170px;
  }
  @media(max-width: 480px){
    height: 100px;
  }
`
const Title = styled.h1`
  margin-top: 150px;
  color: white;
  font-size: 8vh;
  @media(max-width: 1000px){
    margin-top: 70px;
  }
  @media(max-width: 768px){
    margin-top: 40px;
    font-size: 5.6vh;
  }
  @media(max-width: 480px){
    margin-top: 30px;
    font-size: 4vh;
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


function Header() {
  return(
      <Container>
        <Title>La P<TCY>i</TCY><TCR>z</TCR><TCG>z</TCG>a</Title>
      </Container>
  );
}

export default Header;