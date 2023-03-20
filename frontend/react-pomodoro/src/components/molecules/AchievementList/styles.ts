import styled from 'styled-components'

export const Wrapper = styled.div`
  border-radius: 10px;
  height: 500px;
  overflow-y: scroll;
  background-color: transparent;
  display: inline-block;
`

export const StyledTable = styled.table``

export const StyledThead = styled.thead`
  position: sticky;
  top: 0;
  color: #555;
  font-size: 1.2rem;
  font-weight: bold;
  background: #e6e6e6;
  box-shadow: 7px 7px 14px #cacaca, -7px -7px 14px #ffffff;
`

export const StyledTbody = styled.tbody`
  box-shadow: inset 5px 5px 10px #d4d4d4, inset -5px -5px 10px #ffffff,
    5px 5px 10px transparent, -5px -5px 10px transparent;
  color: #666;
`

export const StyledTr = styled.tr`
  padding: 12px;
  display: grid;
  align-items: center;
  grid-template-columns: 24px 170px 100px;

  :not(:first-child) {
    border-top: 1px solid #ccc;
  }
`

export const StyledTd1 = styled.td`
  padding: 0 4px;
  overflow: hidden;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-wrap: break-word;
`

export const StyledTd2 = styled.td`
  text-align: right;
`

export const StyledTh = styled.th``
