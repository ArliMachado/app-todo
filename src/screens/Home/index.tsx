import 'react-native-get-random-values';
import { useMemo, useState } from 'react'
import { Alert } from 'react-native'
import { v4 } from "uuid"
import { RFValue } from 'react-native-responsive-fontsize'


import LogoSvg from '../../assets/logo.svg'
import { EmptyTask } from '../../components/EmptyTask'
import { TaskInfo } from '../../components/TaskInfo'
import { ITask, TaskItem } from '../../components/TaskItem'
import * as S from './styles'


export function Home() {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  const tasksStatus = useMemo(() => {
    const totalTasks = tasks.length;
    const totalTasksFinished = tasks.reduce((accumulator: number, task: ITask) => {
      if (task.isChecked) {
        accumulator += 1;
      }
      return accumulator
    }, 0)

    return {
      TotalTasks: String(totalTasks),
      TotalTasksFinished: String(totalTasksFinished)
    }

  }, [tasks])


  function handleNewTaskAdd() {

    const hasTask = tasks.some(task => task.text === newTask);

    if (hasTask) {
      return Alert.alert('Já existe uma task com a mesma descrição')
    }

    const task = { id: v4(), isChecked: false ,text: newTask }

    setTasks(prevState => [...prevState, task ])
    setNewTask('')
  }

  function handleTaskComplete(id: string){
    const newTasksList = tasks.map(task => {
      if (task.id === id) {
        task.isChecked = !task.isChecked;
      }

      return task;
    })
    setTasks(newTasksList);
    
  }

  function handleRemoveTask(id :string) {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <>
      <S.Header>

          <LogoSvg width={RFValue(110)} height={RFValue(32)} />

        </S.Header>
      <S.Container>

        <S.FormTask>
          <S.Input 
            placeholder='Adicione uma nova tarefa' 
            value={newTask}
            onChangeText={setNewTask}
          />
          <S.AddButton onPress={handleNewTaskAdd}>
            <S.AddIcon name="plus-circle" />
          </S.AddButton>
        </S.FormTask>

        <S.TaskInfoContent>
          <TaskInfo 
            title='Criadas'
            colorTitle='blue'
            count={tasksStatus.TotalTasks}
          />

          <TaskInfo 
            title='Concluídas'
            colorTitle='purple'
            count={tasksStatus.TotalTasksFinished}
          />
        </S.TaskInfoContent>

        <S.TaskListContent>

        {
          tasks.length > 0 
          ? 
            tasks.map(task => 
              
              <TaskItem
              key={task.id}
              task={task}
              onCheckTask={() => handleTaskComplete(task.id)}
              onRemoveTask={() => handleRemoveTask(task.id)}
              />
            )
          : <EmptyTask />
        }
          
        </S.TaskListContent>

      </S.Container>
    </>
  )
}