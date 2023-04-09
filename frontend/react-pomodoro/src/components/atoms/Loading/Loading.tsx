import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components/macro'

/** ローディングアニメーション */
const Loading: FC = () => {
  return (
    <StyledDiv1>
      <StyledDiv2>
        <StyledSpan deg={0} />
        <StyledSpan deg={30} />
        <StyledSpan deg={60} />
        <StyledSpan deg={90} />
        <StyledSpan deg={120} />
        <StyledSpan deg={150} />
        <StyledSpan2 />
      </StyledDiv2>
      <StyledP>LOADING...</StyledP>
      <StyledDiv3>
        {new Array(20).fill(0).map((_, index) => {
          return <StyledSpan3 key={index} index={index + 1} />
        })}
      </StyledDiv3>
    </StyledDiv1>
  )
}

export default Loading

const rotation = keyframes`
  0%{ transform:rotate(0);}
  100%{ transform:rotate(-360deg); }
`

const blinking = keyframes`
0% {opacity: 0;}
16% {opacity: 1;}
24% {opacity: 0;}
32% {opacity: 1;}
50% {opacity: 0.8;}
80% {opacity: 1;}
100% {opacity: 0;}
`

const StyledDiv1 = styled.div`
  padding: 12px 20px 8px;
  width: 140px;
  background: #232323;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`

const StyledDiv2 = styled.div`
  position: relative;
  height: 100px;
  animation: 15s linear infinite ${rotation};
`

const StyledSpan = styled.span<{ deg: number }>`
  width: 40px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #fff;
  position: absolute;
  z-index: 1;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  transform: rotate(${({ deg }) => deg}deg);

  box-shadow: 0 0 2.8rem #5fa8d3, inset 0 0 1.3rem #5fa8d3;
`

const StyledSpan2 = styled.span`
  width: 79px;
  height: 79px;
  content: '';
  border-radius: 50%;
  background: #232323;
  position: absolute;
  z-index: 2;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  box-shadow: inset 0 0 2.8rem #5fa8d3, inset 0 0 1.3rem #5fa8d3;
`

const StyledP = styled.p`
  margin-top: 8px;
  padding: 8px 0;
  text-align: center;
  font-weight: bold;
  font-size: 0.8rem;

  color: #ffffff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #5fa8d3,
    0 0 30px #5fa8d3, 0 0 40px #5fa8d3, 0 0 55px #5fa8d3, 0 0 75px #5fa8d3;

  animation: ${blinking} 2s ease-in-out infinite alternate;
`

const animateTheSpan = keyframes`
0% {
  transform: scale(0.2)
}

80%,
90% {
  transform: scale(0)
}
`

const StyledDiv3 = styled.div`
  position: absolute;
  left: 70px;
  top: 62px;
`

const StyledSpan3 = styled.span<{ index: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 0px;
  height: 0px;
  transform: rotate(calc(18deg * ${({ index }) => index}));

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    transform: scale(0.3);
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 10px #5fa8d3, 0 0 20px #5fa8d3, 0 0 30px #5fa8d3,
      0 0 40px #5fa8d3, 0 0 60px #5fa8d3, 0 0 80px #5fa8d3, 0 0 100px #5fa8d3;
    animation: ${animateTheSpan} 2s linear infinite
      calc(0.1s * ${({ index }) => index});
  }
`
