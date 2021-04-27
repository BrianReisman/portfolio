import styled from "styled-components";

const StyledTechnologies = styled.div`
  /* border: 3px solid pink; */

  padding: 0px 15px 0px 100px; //TODO: use on all section

  h3 {
    text-align: center;
      margin-top: 10px;
  }


  @media (max-width: ${props => props.theme.breakpoints.mid}){
    padding-left: 15px;
    h3{
      font-size: 11vw;
    }
    h4{
      font-size: 9vw;
    }
}
@media (max-width: ${props => props.theme.breakpoints.mid}){

}

`;
export default StyledTechnologies;
