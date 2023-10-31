'use client'
import Image from 'next/image'
import styles from './page.module.css'
import React, { useEffect,useRef,useState } from 'react'

export default function Home() {
  const [tasks, setTasks] = useState([]); //deklaracja stanu z początkową wartością pustej tablicy
  const [newTask, setNewTask] = useState(''); // deklaracja stanu z początkową wartością pustego stringa

  const addTask = () => {
    setTasks([...tasks, newTask]); //dodanie nowego zadania do tablicy zadań (tasks) (...tasks - wczytanie wczesniejszych elementów tablicy)
    setNewTask(''); // wyczyszczenie inputa
  };
  return (
  <div className={styles.Lista}>
    <h1>Prosta To-Do Lista</h1>
    <input id="taskInput" type="text" placeholder="New task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
    <button onClick={addTask} className={styles.button}>Add</button>
    <ul>
      {tasks.map((task, index) => <li key={index}>{task}</li>)}
    </ul>
  </div>
  )
}
