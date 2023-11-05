import styled from 'styled-components';

export const StyledContactList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: auto;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const StyledDeleteButton = styled.button`
  background-color: #ff6347;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #d63431;
  }
`;
