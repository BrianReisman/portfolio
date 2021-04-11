import styled from "styled-components";

const StyledHero = styled.div`
  /* border: 2px solid brown; */

  /* min-width: calc(100% -100px); */
  /* width: 100%; */
  /* flex-shrink: 1; */
  display: flex;
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */
  /* padding-top: 70px; */
  /* padding-bottom: 70px; */
  /* padding-left: 100px; */
  /* padding-right: 50px; */

    padding: 70px 15px 70px 100px;

  @media (max-width: 1024px){
    padding: 50px 15px 50px 100px;
  }


  @media (max-width: 768px){
    flex-direction: column;
    align-items: center;
    .card{
      margin-top: 15px;
    }
    h1{
      /* font-size: ${(props) => props.theme.size.h1768}; */
      font-size: 9.5rem;
    }
  }
`;
export default StyledHero;
