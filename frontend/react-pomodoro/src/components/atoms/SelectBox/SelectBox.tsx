import React from 'react'
import styled from 'styled-components'

export type Props = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  configLength: number
}

const SelectBox: React.FC<Props> = ({ onChange, configLength }) => {
  return (
    <StyledDiv>
      <StyledSpan />
      <StyledSelect onChange={onChange}>
        {new Array(configLength).fill(0).map((_, i) => {
          return (
            <option key={i} value={i}>
              {`option${i + 1}`}
            </option>
          )
        })}
      </StyledSelect>
    </StyledDiv>
  )
}

export default SelectBox

const StyledDiv = styled.div`
  position: relative;
`

const StyledSpan = styled.span`
  pointer-events: none;

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 4px 0 4px;
    border-color: #666 transparent transparent transparent;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`

const StyledSelect = styled.select`
  padding: 4px 25px 4px 10px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 5px 5px 10px #d4d4d4, inset -5px -5px 10px #ffffff,
    5px 5px 10px transparent, -5px -5px 10px transparent;
  background: ${(props) => props.theme.color.white};
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.color.black};
  transition: box-shadow ease-in-out 0.3s;

  &:focus {
    box-shadow: inset 5px 5px 10px transparent, inset -5px -5px 10px transparent,
      5px 5px 10px #d4d4d4, -5px -5px 10px #ffffff;
    outline: none;
  }
`
