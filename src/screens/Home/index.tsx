import { Text, View } from 'react-native'
import * as S from  './styles'
import LogoSvg from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { TaskInfo } from '../../components/TaskInfo'
import { EmptyTask } from '../../components/EmptyTask'


export function Home() {

  return (
    <>
      <S.Header>

          <LogoSvg width={RFValue(110)} height={RFValue(32)} />

        </S.Header>
      <S.Container>

        <S.FormTask>
          <S.Input placeholder='Adicione uma nova tarefa' />
          <S.AddButton>
            <S.AddIcon name="plus-circle" />
          </S.AddButton>
        </S.FormTask>

        <S.TaskInfoContent>
          <TaskInfo 
            title='Criadas'
            colorTitle='blue'
            count='0'
          />

          <TaskInfo 
            title='Concluídas'
            colorTitle='purple'
            count='0'
          />
        </S.TaskInfoContent>

        <EmptyTask />

        

      </S.Container>
    </>
  )
}