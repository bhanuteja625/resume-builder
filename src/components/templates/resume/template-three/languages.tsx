import styled, { css } from 'styled-components'

import type { LanguagesData } from 'types'

type LanguagesProps = {
  data: LanguagesData[]
}

export const Languages = ({ data }: LanguagesProps) => {
  const level = {
    beginner: 1,
    intermediate: 3,
    advanced: 5
  }

  return (
    <Container>
      {data?.length > 0 &&
        data?.map((language, index) => (
          <Item key={index}>
            <LanguageName>{language.language}</LanguageName>

            {!!language.level && (
              <WrapperCircle>
                {Array.from({ length: 5 }, (_, index) => index + 1).map(
                  (item) => (
                    <Circle key={item} active={item <= level[language.level]} />
                  )
                )}
              </WrapperCircle>
            )}
          </Item>
        ))}
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 15px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const LanguageName = styled.p`
  color: #1f74ff;
  margin-right: 10px;
`

const WrapperCircle = styled.div`
  display: flex;
  flex-direction: row;
`

const Circle = styled.div<{ active: boolean }>`
  width: 16px;
  height: 16px;
  background-color: gray;
  border-radius: 50%;
  margin-right: 5px;

  ${({ active }) =>
    active &&
    css`
      background-color: #376ffe;
    `}
`
