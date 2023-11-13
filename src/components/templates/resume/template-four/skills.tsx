import styled from 'styled-components'
import type { SkillData } from 'types'

type SkillsProps = {
  data: SkillData[]
}

export const Skills = ({ data }: SkillsProps) => (
  <Container>
    {data?.length > 0 &&
      data?.map((skill, index) => <Skill key={index}>{skill.skill}</Skill>)}
  </Container>
)

const Container = styled.div`
  margin-bottom: 15px;
`

const Skill = styled.p`
  color: #282828; /* Adjusted color to match the templateFive style */
  margin-bottom: 5px;
  font-weight: bold; /* Adjusted font weight to match the templateFive style */
`
