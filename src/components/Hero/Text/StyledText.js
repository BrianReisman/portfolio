import styled from "styled-components";

const StyledText = styled.div`
  /* border: 2px solid tomato; */
  /* width: 100%; */
  flex-grow: 1;
  flex-basis: 40%;

  /* flex item */
  flex: 1; //balances out styledcard flex-grow
/* flex-shrink: 1; */


  h1 {
    //size in StyledApp.js
    margin-bottom: 20px;
  }
  a,
  span {
    font-size: inherit;
  }

  .punctuation {
    color: ${(props) => props.theme.color.orange};
  }
  .company {
    color: ${(props) => props.theme.color.purple};
    font-weight: 700;
  }












@media (max-width: 1200px){
  h1{
    font-size: 11vw;
  }
}
@media (max-width: 1000px){
  p{
    font-size: 2.25vw;
  }
}


`;

export default StyledText;
