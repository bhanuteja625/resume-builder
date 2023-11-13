import styled from 'styled-components'

type HeaderProps = {
  name: string
  role: string
}

export const Header = ({ name, role }: HeaderProps) => (
  <Container>
    <Title>{name}</Title>
    <Role>{role}</Role>
  </Container>
)

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #376ffe;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 36px;
  color: #fff;
  margin-bottom: 10px;
`

export const Role = styled.p`
  font-size: 18px;
  color: #fff;
`
