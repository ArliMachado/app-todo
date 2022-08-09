import * as S from './styles'


export interface ITask {
  id: string;
  isChecked: boolean;
  text: string;
}

interface ITaskProps {
  task: ITask,
  onCheckTask: () => void;
  onRemoveTask: () => void;
}

export function TaskItem({ task , onCheckTask, onRemoveTask }: ITaskProps) {

  return (
    <S.Container>
      <S.CheckButton onPress={onCheckTask}>
        {
          task.isChecked
          ? <S.CheckIcon />
          : <S.CicleIcon />
        }
      </S.CheckButton>

      <S.Description isChecked={task.isChecked}>
        {task.text}
      </S.Description>

      <S.TrashButton onPress={onRemoveTask}>
        <S.TrashIcon />
      </S.TrashButton>

    </S.Container>
  )

}