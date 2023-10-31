'use client'
import Image from 'next/image'
import styles from './page.module.css'
import React, { useState } from 'react';

export default function Home() {
  const [color, setColor] = useState('rgb(25, 5, 155)'); // Biały jako domyślny

  const generateColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const newColor = `rgb(${red}, ${green}, ${blue})`;
    setColor(newColor);
  };
  return (
    <div style={{ backgroundColor: color, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={generateColor}>Generate Color</button>
      <p>{color}</p>
    </div>
  )
}
