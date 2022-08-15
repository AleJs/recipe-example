import Vegetales from "../components/Vegetales"
import Popular from "../components/Popular"
import styled from "styled-components";
const Home = () => {
  return (
    <Wrapper>

      <Vegetales/>
      <Popular/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0rem 4rem;
  width: 80%;
`;

export default Home