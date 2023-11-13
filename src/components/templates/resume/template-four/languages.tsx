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
              <LevelWrapper>
                {Array.from({ length: 5 }, (_, index) => index + 1).map(
                  (item) => (
                    <LevelSquare
                      key={item}
                      active={item <= level[language.level]}
                    />
                  )
                )}
              </LevelWrapper>
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
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`

const LanguageName = styled.p`
  color: #3a3a3a;
  font-weight: bold;
  margin-right: 10px;
`

const LevelWrapper = styled.div`
  display: flex;
`

const LevelSquare = styled.div<{ active: boolean }>`
  width: 40px;
  height: 10px;
  background-color: #ccc;
  margin-right: 5px;

  ${({ active }) =>
    active &&
    css`
      background-color: #282828;
    `}
`
