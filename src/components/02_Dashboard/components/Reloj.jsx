"use client";
import React, { useState, useEffect } from 'react';

function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex space-x-2'>
      <h2 className='font text-white'>Hora actual:</h2>
      <p className='font text-white'>{formatHour(hora)}</p>
    </div>
  );
}

function formatHour(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const amOrPm = hours >= 12 ? 'p. m.' : 'a. m.';
  const formattedHours = hours % 12 || 12;
  return `${formattedHours}:${padNumber(minutes)}:${padNumber(seconds)} ${amOrPm}`;
}

function padNumber(number) {
  return number.toString().padStart(2, '0');
}

export default Reloj;