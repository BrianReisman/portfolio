import styled from 'styled-components';

const StyledMe = styled.div`
  padding: 0px 15px 70px 100px; //TODO: use on all section

@media (max-width: ${props => props.theme.breakpoints.mid}){

  padding-left: 15px;

}

`;
export default StyledMe;
