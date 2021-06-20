import styled from "styled-components";

const StyledHero = styled.div`
  /* height: 90vh; */
  /* border: 2px solid brown; */

  display: flex;
  padding: 50px 15px;

  @media (max-width: ${(props) => props.theme.breakpoints.tabletH}) {
    padding: 50px 15px 50px 100px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletV}) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    padding-left: 15px;
  }
`;
export default StyledHero;
