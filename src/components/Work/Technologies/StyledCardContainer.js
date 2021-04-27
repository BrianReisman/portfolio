import styled from "styled-components";

const StyledCardContainer = styled.div`
  /* border: 2px dotted black; */
  /* padding: 20px; */

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  //images in all 3 cards
  img {
    /* height: max(65px, 2vw); */
    height: 65px;
    margin: 10px;
  }

  .logos {
    /* border: 2px solid blue; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  span {
    /* border: 2px solid blue; */
    display: flex;
    flex-direction: column;
    margin: 3px;
  }
  p {
    text-align: center;
  }
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    img {
      /* height: 50px; */
      height: 12vw;
    }
  }
`;
export default StyledCardContainer;
