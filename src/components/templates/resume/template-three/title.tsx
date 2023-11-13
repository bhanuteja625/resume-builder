import styled from 'styled-components'

type TitleProps = {
  title: string
}

export const Title = ({ title }: TitleProps) => <Container>{title}</Container>

const Container = styled.h2`
  /* Customize the styling for the Title in templateThree */
  font-weight: bold;
  font-size: 24px;
  color: #ff4500; /* Adjust the color according to your preference */
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 2px solid #ff4500; /* Add a border to the bottom */
`
