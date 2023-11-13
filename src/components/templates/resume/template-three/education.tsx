import styled from 'styled-components'

import type { EducationData } from 'types'

import { List } from './list'

type EducationProps = {
  data: EducationData[]
}

export const Education = ({ data }: EducationProps) => (
  <Container>
    {data?.length > 0 &&
      data?.map((education, index) => (
        <Item key={index}>
          {!!education.program && <Program>{education.program}</Program>}

          <Text>
            {education.institution}{' '}
            {education.duration && `(${education.duration})`}
          </Text>
        </Item>
      ))}
  </Container>
)

const Container = styled.div`
  margin-bottom: 15px;
`

const Item = styled.div`
  margin-bottom: 10px;
`

const Program = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 5px;
`

const Text = styled.p`
  font-size: 14px;
  color: #3a3a3a;
`
