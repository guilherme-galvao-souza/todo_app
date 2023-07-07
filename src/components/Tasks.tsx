import { PlusCircle, Clipboard } from "phosphor-react"
import { Task } from "./Task"
import styles from './Tasks.module.css'

import {useState , FormEvent , ChangeEvent} from 'react';

interface Task{
  id:number;
  content:string;
  isFinished:boolean;
}

export function Tasks(){
  const [tasks,setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [finishedTasksCounter,setFinishedTasksCounter] = useState(0);

  const isSomeTaskAlreadyCreated = tasks.length > 0;
  function isSomeTaskCreated(){
    if(!isSomeTaskAlreadyCreated){
      return(<div className={styles.withoutTasks}>
        <Clipboard size={56}/>
        <p>
          Você ainda não tem tarefas cadastradas
        </p>
        <p>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>)
    }else{return (tasks.map((task:Task)=>{
          return (
          <Task
            key={task.id} 
            taskId={task.id} 
            content={task.content} 
            isFinished = {task.isFinished} 
            handleDelete={handleDeleteTask}
            onFinishedTask = {handleFinishedTask}
          />)
        }))
    }
    
  }
  
  function handleNewTaskValue(event:ChangeEvent<HTMLInputElement>){
    setNewTask(event.target.value)
  }

  
  const [id,setId] = useState(0);
  function handleAddNewTask(event : FormEvent){
    event.preventDefault();
    setTasks([...tasks,{id: id,content: newTask,isFinished:false}]);
    setId(id + 1);
    setNewTask('');
    handleFinishedTasksCounter(tasks);
  }

  function handleDeleteTask(taskToBeDeleted:any){
    console.log(taskToBeDeleted)
    const taskIdToDelete = +taskToBeDeleted.currentTarget.parentNode.getAttribute('id');
    const currentTasksAdjusted = tasks.filter((task)=>{return task.id !== taskIdToDelete;});
    setTasks(currentTasksAdjusted);
    handleFinishedTasksCounter(currentTasksAdjusted);
    
    
  }

  function handleFinishedTask(e:any){
    console.log(e);
    const taskId = +e.currentTarget.parentNode.parentNode.getAttribute('id');
    const tasksFinishedAdjusted = tasks.map((task)=>{
      if(task.id === taskId){
        !task.isFinished ? task.isFinished = true : task.isFinished = false; 
      }
      return task;
    })
    setTasks(tasksFinishedAdjusted);
    handleFinishedTasksCounter(tasksFinishedAdjusted);

    
  }

  function handleFinishedTasksCounter(taskArray:Task[]){
    const finishedTasksCounter = taskArray.reduce((acc:number,currentValue:Task)=>{
      if(currentValue.isFinished === true){
        acc+=1
        return acc;
      }
    
       return acc;
      },0)
      setFinishedTasksCounter(finishedTasksCounter);
      
  }

  return(
    <div className={styles.tasksWrapper}>
      <form onSubmit={handleAddNewTask} className={styles.formNewTask}>
        <input onChange={handleNewTaskValue} value={newTask} type="text" placeholder="Adicione uma nova tarefa" required maxLength={80}/>
        <button type="submit"> Criar<PlusCircle size={16}/></button>
      </form>
      <div>
        <header className={styles.tasksHeader}>
          <p className={styles.createdTasks}>Tarefas Criadas <span className={styles.taskCounter}>{tasks.length}</span></p>
          <p className={styles.concludedTasks}>Concluídas <span className={styles.taskCounter}>{tasks.length === 0 ? 0 : finishedTasksCounter + ' de ' + tasks.length}</span></p>
        </header>
        <div className={styles.tasksColumn}>
        {isSomeTaskCreated()}
        </div>
        
      </div>
    </div>
  )
}