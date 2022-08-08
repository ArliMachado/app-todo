import * as S from './styles'

import EmptySvg from '../../assets/empty.svg'

export function EmptyTask() {

  return (

    <S.Container>
      <EmptySvg width={56} height={56} />
      <S.Title>
        Você ainda não tem tarefas cadastradas
      </S.Title>
      <S.Description>
        Crie tarefas e organize seus itens a fazer
      </S.Description>
    </S.Container>

  )
}