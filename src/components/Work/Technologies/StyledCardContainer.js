import styled from "styled-components";

const StyledCardContainer = styled.div`
  /* border: 2px dotted black; */
  /* padding: 20px; */

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .eachCard {
    background-color: ${(props) => props.theme.color.background};
    box-shadow: -9px 15px 40px rgba(0, 0, 0, 0.25);
    border-radius: 32px;
    padding: 10px;
    width: 400px;
    margin: 20px;

    section {
      /* border: 1px solid red;
    > * {
      border: 1px solid blue;
    } */

      display: grid;

      grid-gap: 0px; //replaces both grid-row-gap + grid-column-gap
      /* auto-fill == "get as many columns as I can get in" */
      /* As soon as you add widths to flex0box */
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      grid-template-rows: auto; //explicit, not needed, (default)
    }
  }

  //images in all 3 cards
  img {
    /* border: 1px solid coral; */
    /* height: max(65px, 2vw); */
    height: 50px;
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
    margin: 1px;
  }
  p {
    text-align: center;
  }
  h4 {
    margin-bottom: 10px;
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
