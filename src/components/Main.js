import styled from "styled-components";
import Pizza1 from "./img/lacuma.png"
import Pizza2 from "./img/lamenta.png"
import Pizza3 from "./img/labana.png"
import Pizza4 from "./img/latoca.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 50vh;
  margin: 8vh 5vw 0 8vw;
  @media(max-width: 480px){
    margin: 5vh 2vw 0 2vw;
  }
`
const Title = styled.h1`
  font-size: 4vh;
  font-weight: 700;
  color: #2E2E2E;

  @media(max-width: 768px){
    font-size: 3vh;
  }
  @media(max-width: 480px){
    font-size: 2.7vh;
  }
`
const Items = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  height: 40vh;
`
const Pizza = styled.div`
  margin-top: 65px;
  background-color: #FEF6F4;
  border-radius: 25px;
  width: 260px;
  height: 280px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

`
const NamePizza = styled.p`
 font-size: 2.3vh;
 margin-top: 10px;
 font-weight: 700;
 color: #2E2E2E; 
`
const ImgPizza = styled.img`
  margin-top: -55px;
`
const AboutPizza = styled.p`
  margin-top: 10px;
  font-size: 1.8vh;
  font-weight: 400;
  color: #616161;
  text-align: center;
  width: 200px;
`
const PricePizza = styled.h3`
  margin-top: 15px;
  font-size: 2.7vh;
  font-weight: 700;
  color: #2E2E2E;
`
const BuyPizza = styled.button`
  margin-top: 15px;
  background-color: #FFA200;
  width: 260px;
  height: 35px;
  border-radius: 10px;
  border-style: none;
  transition: 0.5s;
  color: #2E2E2E;
  font-weight: 600;

  &:hover{
    background-color: #FFA000;
    cursor: pointer;
    font-size: 1.5vh;
  }
`



function Main() {
  return(
      <Container>
        <Title>Mais vendidas</Title>

        <Items>
          <Pizza>
            <ImgPizza src={Pizza1} alt="Imagem da Pizza"/>
            <NamePizza>La Cuma</NamePizza>
            <AboutPizza>Tomate, azeite de oliva, queijo mozzarella e manjericão.</AboutPizza>
            <PricePizza>R$ 24,99</PricePizza>
            <BuyPizza>Comprar agora</BuyPizza>
          </Pizza>

          <Pizza>
            <ImgPizza src={Pizza2} alt="Imagem da Pizza"/>
            <NamePizza>La Menta</NamePizza>
            <AboutPizza>Brócolis, palmito, azeitonas e rúcula com tomate seco.</AboutPizza>
            <PricePizza>R$ 22,99</PricePizza>
            <BuyPizza>Comprar agora</BuyPizza>
          </Pizza>
            
          <Pizza>
        
            <ImgPizza src={Pizza3} alt="Imagem da Pizza"/>
            <NamePizza>La Bana</NamePizza>
            <AboutPizza>Banana, leite condensado e leite em pó.</AboutPizza>
            <PricePizza>R$ 20,99</PricePizza>
            <BuyPizza>Comprar agora</BuyPizza>
          </Pizza>

          <Pizza>
            <ImgPizza src={Pizza4} alt="Imagem da Pizza"/>
            <NamePizza>La Toca</NamePizza>
            <AboutPizza>Tomate, queijo parmesão, orégano, calabresa e cebola.</AboutPizza>
            <PricePizza>R$ 24,99</PricePizza>
            <BuyPizza>Comprar agora</BuyPizza>
          </Pizza>
        </Items>
      </Container>
  );
}

export default Main;