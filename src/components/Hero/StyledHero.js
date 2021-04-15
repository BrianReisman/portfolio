import styled from "styled-components";

const StyledHero = styled.div`
  /* border: 2px solid brown; */

  display: flex;
  padding: 70px 15px 70px 100px; //TODO: make padding top and bottom responsive, lessen on smaller screens




  @media (max-width: ${props => props.theme.breakpoints.tabletH}) {
    padding: 50px 15px 50px 100px;
  }

  @media (max-width: ${props => props.theme.breakpoints.tabletV}) {
    flex-direction: column;
    align-items: center;

  }
  @media (max-width: ${props => props.theme.breakpoints.mid}){
    padding-left: 15px;
}

`;
export default StyledHero;
