import styled from 'styled-components';

export const NavRoot = styled.nav`
  border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: center;
  width: 50%;
  margin: 0 auto;
`;

export const Button = styled.button`
  padding: 5px 16px;
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.color.orange};
  /* outline: none; */
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  align-items: center;

  /* svg { */
    /* height: 24px; */
    /* width: 24px; */
  /* } */
  .test {
    color: black;
  }

  /* border: 1px solid blue; */
`;
