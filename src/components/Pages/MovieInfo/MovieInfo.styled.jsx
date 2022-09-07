import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Wrapper = styled.div`
  padding: 20px 0px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #ff0000;
    color: #303030;
  }
`;

export const InfoLink = styled(NavLink)`
  padding: 5px 10px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #303030;
  border-radius: 5px;
  background-color: #c2c2c2;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #ff0000;
  }
  &.active {
    color: #fff;
    background-color: #ff0000;
  }
`;

export const InfoTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 500;
`;

export const InfoList = styled.ul`
  display: flex;
  padding: 20px 0px;
  margin: 0;
  list-style: none;
`;
export const InfoItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
