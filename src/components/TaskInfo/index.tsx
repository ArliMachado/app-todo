import * as S from './styles'

interface ITaskInfoProps {
  title: string;
  colorTitle: 'blue' | 'purple';
  count: string;
}

export function TaskInfo({ title, colorTitle, count }: ITaskInfoProps) {

  return (
    <S.Container>
      <S.Title fontColor={colorTitle}>
        {title}
      </S.Title>
      
      <S.Count>{count}</S.Count>
    </S.Container>
  )
}