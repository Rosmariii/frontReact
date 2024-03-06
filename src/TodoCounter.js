import todoConterSound from'./TodoCounter.mp3'
import React, { useEffect } from 'react';

function TodoCounter({total, complited, allComplited}) {

  useEffect(() => {
    if (allComplited) {
      const audio = new Audio(todoConterSound)
      audio.play();
    }
  }, [allComplited]);
    return (
      <h1 style={{
        fontSize: '24px',
        textAlign: 'center',
        margin: '0',
        padding: '48px',
        fontFamily: "Monserrat, roboto",
        color: "#E75480",
        animation: allComplited ? 'myAnimation 2s infinite' : 'none'
      }}>
      {allComplited ? "FELICIDADES has completado todos los TODOs" : `Has completado ${complited} de ${total} TODOs`}
      </h1>
      
    )
  }

  export { TodoCounter }