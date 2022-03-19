import styled from "styled-components";
import banner from "./img/banner.png";

const Container = styled.div`
  height: 50vh;
  position: relative;
`

const Banner = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`
const Title = styled.h1`
  display: flex;
  justify-content: center;
  padding-top: 15vh;
  color: white;
  font-size: 8vh;

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
        <Banner src={banner}/>
        <Title>La P<TCY>i</TCY><TCR>z</TCR><TCG>z</TCG>a</Title>
      </Container>
  );
}

export default Header;