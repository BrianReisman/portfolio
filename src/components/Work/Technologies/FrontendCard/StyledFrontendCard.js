import styled from "styled-components";

const StyledFrontendCard = styled.div`
  /* border: 2px solid blue; */

  background-color: ${(props) => props.theme.color.background};
  box-shadow: -9px 15px 40px rgba(0, 0, 0, 0.25);
  border-radius: 32px;

  section {
    border: 1px solid red;
    > * {
      border: 1px solid blue;
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    

    grid-row-gap: 1px;
    grid-column-gap: 9px;
  }

  /* padding: 20px; */
  /* max-width: 375px; */
`;
export default StyledFrontendCard;
