import styled from "styled-components";

const StyledHero = styled.div`
  /* height: 90vh; */
  /* border: 2px solid brown; */

  display: flex;
  padding: 50px 15px;

  @media (max-width: ${(props) => props.theme.breakpoints.tabletV}) {
    flex-direction: column;
    align-items: center;
  }

`;
export default StyledHero;
