import styled from 'styled-components'

import type { ExperienceData } from 'types'

type ExperienceProps = {
  data: ExperienceData[]
}

export const Experience = ({ data }: ExperienceProps) => (
  <Container>
    <Title>Work Experience</Title>
    {data?.length > 0 &&
      data?.map((experience, index) => (
        <Wrapper key={index}>
          <Role>{experience.role}</Role>
          <Employer>{experience.employer}</Employer>

          <Duration>{experience.duration}</Duration>

          <Description
            dangerouslySetInnerHTML={{ __html: experience.description }}
          />
        </Wrapper>
      ))}
  </Container>
)

const Container = styled.div`
  background-color: #fdfdfd;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
`

const Title = styled.h2`
  font-size: 20px;
  color: #376ffe;
  margin-bottom: 15px;
`

const Wrapper = styled.div`
  margin-bottom: 15px;
`

const Role = styled.p`
  font-size: 18px;
  color: #323232;
  font-weight: bold;
  margin-bottom: 5px;
`

const Employer = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 5px;
`

const Duration = styled.p`
  font-size: 14px;
  color: #757575;
  margin-bottom: 10px;
`

const Description = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #3a3a3a;
`
