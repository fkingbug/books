import { StyledButton, StyledListbox, StyledPopper } from './CustomSelect.style'
import SelectUnstyled, { SelectUnstyledProps } from '@mui/base/SelectUnstyled'

const CustomSelect = (props: SelectUnstyledProps<string>) => {
  const components: SelectUnstyledProps<string>['components'] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  }
  return <SelectUnstyled {...props} components={components} />
}

export default CustomSelect
