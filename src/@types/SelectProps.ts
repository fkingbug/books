import { Control } from 'react-hook-form'
import { IForm } from './IFrom'

export interface selectPropItem {
  value: string
  label: string
}

export interface SelectProps {
  selectItems: selectPropItem[]
  name: keyof IForm
}
