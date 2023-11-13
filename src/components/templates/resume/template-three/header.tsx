import styled from 'styled-components'

type HeaderProps = {
  name: string
  role: string
  summary: string
}

export const Header = ({ name, role, summary }: HeaderProps) => (
  <Container>
    <Title>{name}</Title>
    <Role>{role}</Role>

    <Summary dangerouslySetInnerHTML={{ __html: summary }} />
  </Container>
)

const Container = styled.div`
  margin-bottom: 30px;
`

const Title = styled.p`
  font-weight: bold;
  font-size: 32px;
  color: #1f74ff;
`

const Role = styled.p`
  font-size: 24px;
  margin-top: 10px;
  color: #757575;
`

const Summary = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: #3a3a3a;
  margin-top: 10px;
`
