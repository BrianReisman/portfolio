import styled from "styled-components";

const StyledCard = styled.div`
  /* background-color: blue; */
  /* border: 1px solid tomato; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 800px;

  margin-top: 20px;
  background-color: ${(props) => props.theme.color.background};
  padding: 15px;
  box-shadow: -15px 19px 24px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  p,
  .icons {
    margin: 10px;
  }
  a {
    font-size: ${(props) => props.theme.size.small};
    color: ${(props) => props.theme.color.orange};
  }
  .email {
    color: ${(props) => props.theme.color.black};
  }

  .icons {
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80px;
  }
`;
export default StyledCard;
