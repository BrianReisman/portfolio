import styled from "styled-components";

const StyledCardContainer = styled.div`
  /* border: 3px dotted peachpuff; */

  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  //images in call 3 cards
  img {
    height: max(65px, 5vw);
    margin: 10px;
  }

  /* //!commented out before playing */
  .row1,
  .row2 {
    /* border: 2px solid blue; */
    /* margin: 5px 0; */
    /* display: flex; */
    /* flex-wrap: wrap; */
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
  }
`;
export default StyledCardContainer;
