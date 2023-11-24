import styled, { keyframes } from 'styled-components';

const pulse = keyframes`0% { background-color: #D9AFD9; }
30% { background-color: #FA8BFF; }
40% {background-color: #FF5ACD; }
75% {background-color: grey;}
100% { background-color: #FF3CAC; }`;

const Wrapper = styled.div`
  width: 300px;
  animation: ${pulse} 2s infinite;
  margin: 0 auto;
`;

export default Wrapper;
