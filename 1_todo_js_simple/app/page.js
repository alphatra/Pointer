'use client'
import Image from 'next/image'
import styles from './page.module.css'
import React, { useEffect,useRef,useState } from 'react'
export default function Home() {

  const addTask = () => {
    const taskInput = document.getElementById("taskInput"); //pobranie elementów
    const taskList = document.getElementById("taskList"); //pobranie elementów
    if(taskInput && taskList) { //sprawdzenie czy input i lista istnieją
      const newTask = document.createElement("li"); //stworzenie elementu li
      newTask.innerText = taskInput.value; //dodanie tekstu do elementu
      taskList.appendChild(newTask); //dodanie elementu do listy
      taskInput.value = ''; //czyszczenie inputa
    }
  };

  return (
    <div className={styles.Lista}>
      <h1>Prosta To-Do Lista</h1>
      <input id="taskInput" type="text" placeholder="New task" />
      <button onClick={addTask} className={styles.button}>Add</button>
      <ul id="taskList"></ul>
    </div>
  )
}
