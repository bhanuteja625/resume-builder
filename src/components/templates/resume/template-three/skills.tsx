import styled from 'styled-components'
import type { SkillData } from 'types'

type SkillsProps = {
  data: SkillData[]
}

export const Skills = ({ data }: SkillsProps) => (
  <Container>
    {data?.length > 0 &&
      data?.map((skill, index) => (
        <Skill key={index}>
          <SkillName>{skill.skill}</SkillName>
          {/* You can add additional styling or elements here if needed */}
        </Skill>
      ))}
  </Container>
)

const Container = styled.div`
  /* Add any specific styling for the Skills container in templateThree */
  margin-bottom: 15px;
`

const Skill = styled.div`
  /* Add any specific styling for each skill container in templateThree */
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`

const SkillName = styled.p`
  /* Styling for the skill name in templateThree */
  color: #3a3a3a;
  margin-right: 10px; /* Adjust spacing between skill name and additional elements */
`
