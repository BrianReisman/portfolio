import styled from 'styled-components';

export const NavRoot = styled.nav`
  /* border: 1px solid blue; */

  position: relative; //for absolute placement of menu dropdown to respect parent.
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-right: 1rem;
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
  align-items: flex-end;

  /* svg { */
  /* height: 24px; */
  /* width: 24px; */
  /* } */
  .test {
    /* border: 1px solid red; */
    color: #ccc;
    height: 12px;
    width: 12px;
    padding: 0.5rem;
  }

  /* border: 1px solid blue; */
`;
