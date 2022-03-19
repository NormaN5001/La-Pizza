import styled from "styled-components";
import Favorito from "./img/favorito.png"
import Pizza1 from "./img/lacuma.png"

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 50vh;
  margin: 8vh 5vw 0 5vw;
`
const Title = styled.h1`
  position: absolute;
  left: 42.5%;
  font-size: 4vh;
`
const NamePizza = styled.h2`
  font-weight: 600;
  margin-top: 4vh;
`
const AboutPizza = styled.p`
  font-weight: 300;
  color: #616161;
  margin-top: 1.5vh;
`
const PricePizza = styled.p`
  font-weight: 700;
  font-size: 3vh;
  margin-top: 1.5vh;
`
const ButtonBuy = styled.button`
  border-style: none;
  border-radius: 25px;
  background-color: #FFA200;
  width: 157px;
  height: 31px;
  margin-top: 4vh;
`
const Favorite = styled.img`
  position: absolute;
  right: 15px;
  top: 15px;
`
const PizzaImg = styled.img`
  margin-top: -50px;
`
const TopPizzas = styled.div`
  position: relative;
  margin-top: 15vh;
  height: 275px;
  width: 250px;
  background-color: #FEF6F4;
  border-radius: 25px;
  text-align: center;

`

function Main() {
  return(
      <Container>
        <Title>Mais vendidas</Title>

        <TopPizzas>
          <PizzaImg src={Pizza1} alt="Imagem Pizza"/>
          <Favorite src={Favorito}/>
          <NamePizza>La Cuma</NamePizza>
          <AboutPizza>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</AboutPizza>
          <PricePizza>R$ 23</PricePizza>
          <ButtonBuy>Comprar agora</ButtonBuy>
        </TopPizzas>

        <TopPizzas>
          <PizzaImg src={Pizza1} alt="Imagem Pizza"/>
          <Favorite src={Favorito}/>
          <NamePizza>La Menta</NamePizza>
          <AboutPizza>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</AboutPizza>
          <PricePizza>R$ 23</PricePizza>
          <ButtonBuy>Comprar agora</ButtonBuy>
        </TopPizzas>

        <TopPizzas>
          <PizzaImg src={Pizza1} alt="Imagem Pizza"/>
          <Favorite src={Favorito}/>
          <NamePizza>La Bana</NamePizza>
          <AboutPizza>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</AboutPizza>
          <PricePizza>R$ 23</PricePizza>
          <ButtonBuy>Comprar agora</ButtonBuy>
        </TopPizzas>

        <TopPizzas>
          <PizzaImg src={Pizza1} alt="Imagem Pizza"/>
          <Favorite src={Favorito}/>
          <NamePizza>La Toca</NamePizza>
          <AboutPizza>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</AboutPizza>
          <PricePizza>R$ 23</PricePizza>
          <ButtonBuy>Comprar agora</ButtonBuy>
        </TopPizzas>
      </Container>
  );
}

export default Main;