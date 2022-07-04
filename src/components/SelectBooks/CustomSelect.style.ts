import * as React from 'react'
import PopperUnstyled from '@mui/base/PopperUnstyled'
import { selectUnstyledClasses } from '@mui/base/SelectUnstyled'
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled'
import { styled } from '@mui/system'

export const StyledButton = styled('button')(
  () => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  width: 300px;
  font-size : 18px;
  border: 1px solid #808080;
  border-radius: 4px;
  margin-top: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: #1A2027;
  cursor : pointer;

  @media (max-width:680px) {
    width : 100%;
  }
  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid 	#993300;
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
)

export const StyledListbox = styled('ul')(
  () => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  width: 300px;
  border: 1px solid #1A2027;
  background : white;
  border-radius: 4px;
  color: #1A2027;
  overflow: auto;
  outline: 0px;
  @media (max-width:680px) {
    width : 100%;
  }
  `
)

export const StyledOption = styled(OptionUnstyled)(
  () => `
  list-style: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size : 18px;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: #808080;
    color:white;
  }

  &.${optionUnstyledClasses.disabled} {
    background-color: #808080;
    opacity : 0.6;

    color:white;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: #808080;
    color:white;
  }
  `
)

export const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`
