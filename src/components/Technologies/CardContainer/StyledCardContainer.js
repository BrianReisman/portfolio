import styled from "styled-components";

const StyledCardContainer = styled.div`
  border: 3px dotted peachpuff;

  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  //images in call 3 cards
  img {
    height: 65px;
    margin: 10px;
  }
  .row1,
  .row2 {
    /* border: 2px solid blue; */
    margin: 5px 0;
    display: flex;
    /* flex-wrap: wrap; */
  }
  span {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }
  p {
    text-align: center;
  }
  h4 {
    margin-bottom: 20px;
  }
`;
export default StyledCardContainer;
