import { Trash , Circle , CheckCircle } from "phosphor-react"
import styles from "./Task.module.css"

export function Task({taskId,content,handleDelete,onFinishedTask,isFinished}){
  return(
    <div id={taskId} className={styles.taskContainer}>
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