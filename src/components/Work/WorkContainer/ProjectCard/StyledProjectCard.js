import styled from "styled-components";

const StyledProjectCard = styled.div`
  /* border: 2px solid tomato; */
  * {
    /* border: 1px solid blue; */
  }

  background-color: ${(props) => props.theme.color.white};
  border-radius: 8px;
  box-shadow: -5px 5px 40px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px 35px; //padding instead of height
  margin: 25px 0;
  h3 {
    text-align: center;
  }
  .cardSection {
    margin: 10px;
  }

  .projectCardMain {
    /* border: 2px solid black; */
    * {
      /* border: 2px solid black; */
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    flex: 1;
    /* height: 10%; */
    width: 1%;
    /* height: auto; */
  }
  .projectText {
    flex: 2;
    margin: 15px;
  }

  a {
    font-size: ${(props) => props.theme.size.small};
    text-align: center;
  }
  .links {
    display: flex;
    align-items: center;
  }
  .pipe {
    margin: 0 15px;
    font-size: 3.6rem;
    color: ${(props) => props.theme.color.orange};
  }
  .deployment,
  .repo {
    color: ${(props) => props.theme.color.purple};
  }
  .demo {
    color: ${(props) => props.theme.color.orange};
  }

  @media (max-width: 768px) {
    .projectCardMain {
      flex-direction: column;
    }
    img {
      width: 50%;
    }
  }

  @media (max-width: 550px) {
    .links {
      flex-direction: column;
    }
    .pipe {
      display: none;
    }
    .deployment,
    .repo {
      margin-bottom: 20px;
    }
  }
`;
export default StyledProjectCard;
