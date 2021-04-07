import styled from "styled-components";

const StyledHero = styled.div`
  border: 2px solid brown;

  /* min-width: calc(100% -100px); */
  /* width: 100%; */
  /* flex-shrink: 1; */

  display: flex;
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */
  padding-top: 70px;
  padding-bottom: 70px;
  padding-left: 100px;
  /* padding-right: 50px; */

  /* .one, .two{
    border: 2px solid blue;
    width: 100%;
    flex-grow: 1;
    flex-basis: 25%;

  }
  .one{
    
  }
  .two{

  } */

  @media (max-width: 1000px){
    flex-direction: column;
    align-items: center;
    .card{
      margin-top: 15px;
    }
    h1{
      font-size: ${(props) => props.theme.size.h1};

    }
  }
`;
export default StyledHero;
