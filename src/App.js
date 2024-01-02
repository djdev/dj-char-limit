import React from 'react';
import './style.css';

export default function App() {
  function eventHandler(event) {
    const value = event.target.value;

    if (value.length > 10) {
      event.target.value = value.slice(0, value.length - 1);

      alert('Character limit exceeded');
    }
  }

  return (
    <section>
      <h1>Character Limit</h1>
      <input placeholder="Enter some text" onChange={eventHandler} />
    </section>
  );
}
