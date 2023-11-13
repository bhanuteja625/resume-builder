import styled from 'styled-components'

type TitleProps = {
  title: string
  removeMargin?: boolean
}

export const Title = ({ title, removeMargin }: TitleProps) => (
  <Container removeMargin={removeMargin}>{title}</Container>
)

const Container = styled.h2<{ removeMargin: boolean }>`
  font-weight: bold; /* Adjusted font weight to match the templateFive style */
  font-size: 24px; /* Adjusted font size to match the templateFive style */
  text-transform: uppercase;

  color: #376ffe; /* Adjusted color to match the templateFive style */

  margin-top: 40px;
  margin-bottom: 20px;

  ${(props) => props.removeMargin && 'margin-top: 0;'}

  &::after {
    display: block;
    content: '';
    margin-top: 5px;
    width: 20%;
    height: 2px;
    background: #376ffe; /* Adjusted color to match the templateFive style */
  }
`
