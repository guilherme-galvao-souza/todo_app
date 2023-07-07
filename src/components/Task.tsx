import { Trash , Circle , CheckCircle } from "phosphor-react"
import styles from "./Task.module.css"

interface Task{
  taskId:number;
  content:string;
  handleDelete: (task:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onFinishedTask: (finishedTask:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isFinished:boolean;

}
export function Task({taskId,content,handleDelete,onFinishedTask,isFinished}:Task){
  return(
    <div id={taskId.toString()} className={styles.taskContainer}>
      <div className={styles.taskContent}>
        <button onClick={onFinishedTask} className={isFinished ? styles.finishedTaskButton : ''}>{isFinished ? <CheckCircle size={24} weight="fill"/> : <Circle size={24}/> }</button>
        <p className={isFinished ? styles.finishedTaskContent : ''}>{content}</p>
      </div>
      <button onClick={handleDelete}>
        <Trash size={20}/>
      </button>
      

    </div>
  )
}