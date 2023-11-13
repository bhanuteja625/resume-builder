import { useTranslation } from 'next-i18next'

import { TemplateOne } from 'components/templates/resume'
import { TemplateTwo } from 'components/templates/resume'
import { TemplateThree } from 'components/templates/resume'
import { TemplateFour } from 'components/templates/resume'
import type { FieldValues } from 'hooks'

type TemplateProps = {
  ref: React.Ref<HTMLDivElement>
  data: FieldValues
}

export const ALL_TEMPLATES = ({ data, ref }: TemplateProps) => {
  const { t } = useTranslation('common')

  return [
    {
      id: '1',
      name: 'Paris',
      layout: <TemplateOne data={data} ref={ref} />
    },
    {
      id: '2',
      name: t('berlin'),
      layout: <TemplateTwo data={data} ref={ref} />
    },
    {
      id: '3',
      name: t('Aurora'),
      layout: <TemplateThree data={data} ref={ref} />
    },
    {
      id: '4',
      name: t('blue wave'),
      layout: <TemplateFour data={data} ref={ref} />
    }
  ]
}
