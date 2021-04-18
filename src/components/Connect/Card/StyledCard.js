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
  box-shadow: -15px 19px 54px rgba(0, 0, 0, 0.2);
  border-radius: 32px;
  p,
  .icons {
    margin: 10px;
    word-break: break-word; //*
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
  @media (max-width: ${props => props.theme.breakpoints.mobileL}){
    /* background-color: black; */
    width: 90vw;
  }
`;
export default StyledCard;
