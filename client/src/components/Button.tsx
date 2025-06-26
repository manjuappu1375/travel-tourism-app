// Example: components/Button.tsx
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`

export default Button
