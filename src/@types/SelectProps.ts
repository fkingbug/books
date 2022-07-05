import { ParamsProps } from './ParamsProps'

export interface SelectPropItem {
  value: string
  label: string
}

export interface SelectProps {
  selectItems: SelectPropItem[]
  name: keyof ParamsProps
  helperName: string
}
