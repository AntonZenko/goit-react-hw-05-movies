import styled from 'styled-components';

export const CastImg = styled.img`
  height: 300px;
  object-fit: cover;
`;

export const CastTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 22px;
  font-weight: 500;
`;

export const CastText = styled.p`
  font-size: 18px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0px;
  margin: 0;
  list-style: none;
`;
export const CastItem = styled.li`
  width: 200px;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
