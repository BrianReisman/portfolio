import styled from "styled-components";

const StyledTechnologies = styled.div`
  /* border: 3px solid pink; */

  padding: 0px 15px 70px 100px; //TODO: use on all section

  h3 {
    text-align: center;
    /* border: 1px solid blue; */
  }


  @media (max-width: ${props => props.theme.breakpoints.mid}){
    padding-left: 15px;
}
`;
export default StyledTechnologies;
