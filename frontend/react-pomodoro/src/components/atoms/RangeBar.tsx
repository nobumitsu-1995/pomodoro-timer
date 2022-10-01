import React from 'react'
import styled from 'styled-components/macro'

type Props = {
  width: number
  value: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RangeBar: React.FC<Props> = ({ width, value, onChange }) => {
  return (
    <StyledInput
      width={width}
      type='range'
      min='0'
      max='100'
      onChange={onChange}
      value={value}
    />
  )
}

export default RangeBar

const StyledInput = styled.input<Props>`
  -webkit-appearance: none;
  width: ${({ width }) => width}px;
  height: 20px;
  border-radius: 15px;
  overflow: hidden;

  &::-webkit-slider-runnable-track {
    padding: 3px;
    height: 20px;
    background: #ebebeb;
    box-shadow: inset 3px 3px 6px #cccccc, inset -3px -3px 6px #ffffff;
    border-radius: 20px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    background: linear-gradient(145deg, #d4d4d4, #fbfbfb);
    box-shadow: 0px 0 0 3px #ff80d7,
      -${({ width }) => width + 10}px 0 0 ${({ width }) => width}px #ff80d7,
      9px 9px 18px #e071bd, -9px -9px 18px #ff8ff1;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-track {
    padding: 4px;
    height: 25px;
    background: #ebebeb;
    box-shadow: inset 3px 3px 6px #cccccc, inset -3px -3px 6px #ffffff;
    border-radius: 20px;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    width: 17px;
    height: 17px;
    background: linear-gradient(145deg, #d4d4d4, #fbfbfb);
    box-shadow: 0px 0 0 4px #ff80d7,
      -${({ width }) => width + 10}px 0 0 ${({ width }) => width}px #ff80d7,
      9px 9px 18px #e071bd, -9px -9px 18px #ff8ff1;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-ms-track {
    padding: 4px;
    height: 25px;
    background: #ebebeb;
    box-shadow: inset 3px 3px 6px #cccccc, inset -3px -3px 6px #ffffff;
    border-radius: 20px;
    cursor: pointer;
  }

  &::-ms-thumb {
    -webkit-appearance: none;
    width: 17px;
    height: 17px;
    background: linear-gradient(145deg, #d4d4d4, #fbfbfb);
    box-shadow: 0px 0 0 4px #ff80d7,
      -${({ width }) => width + 10}px 0 0 ${({ width }) => width}px #ff80d7,
      9px 9px 18px #e071bd, -9px -9px 18px #ff8ff1;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-ms-fill-lower {
    display: none;
  }

  &::-ms-ticks-after {
    display: none;
  }

  &::-ms-ticks-before {
    display: none;
  }

  &::-ms-tooltip {
    display: none;
  }
`
