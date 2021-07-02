import styled from "styled-components";

const StyledHamburger = styled.div`
  /* border: 4px solid blue; */
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 22px;
  margin-right: 20px;

  .row {
    width: 40px;
    height: 4px;
    border-radius: 50px;
    background-color: ${(props) => props.theme.color.orange};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    display: flex;
  }
`;
export default StyledHamburger;
