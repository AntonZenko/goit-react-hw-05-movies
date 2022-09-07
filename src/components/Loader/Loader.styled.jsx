import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.1);
`;

export const Spinner = styled(RotatingLines)`
  transform: translate(-50%, -50%);
`;
