import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [shape, setShape] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passMessage, setPassMessage] = useState('');
  const [fruits, setFruits] = useState([]);
  const [color, setColor] = useState('');
  const [email, setEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const validateShape = () => {
    if (input === '3') setShape('Uchburchak');
    else if (input === '4') setShape("To'rtburchak");
    else if (input === '5') setShape('Beshburchak');
    else setShape('Bunday shakl mavjud emas');
    setInput('');
  };

  const validatePassword = () => {
    if (password === confirmPassword) setPassMessage('Parol mos keldi');
    else setPassMessage('Parol mos kelmadi');
    setPassword('');
    setConfirmPassword('');
  };

  const toggleFruit = (fruit) => {
    setFruits((prev) =>
      prev.includes(fruit) ? prev.filter((f) => f !== fruit) : [...prev, fruit]
    );
  };

  const validateEmail = () => {
    if (email.includes('@') && email.includes('.'))
      setEmailMessage('Email to`g`ri');
    else setEmailMessage('Email noto`g`ri');
    setEmail('');
  };

  return (
    <div className="container">
      <h1 className="header">Interaktiv Funksiyalar</h1>

      <div className="section">
        <h2 className="section-title">1. Shaklni aniqlash</h2>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Raqam kiriting"
          className="input-field"
        />
        <button onClick={validateShape} className="button">
          Aniqlash
        </button>
        <p className="result">{shape}</p>
      </div>

      <div className="section">
        <h2 className="section-title">2. Parolni tekshirish</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Parolni kiriting"
          className="input-field"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Parolni tasdiqlang"
          className="input-field"
        />
        <button onClick={validatePassword} className="button">
          Tekshirish
        </button>
        <p className="result">{passMessage}</p>
      </div>

      <div className="section">
        <h2 className="section-title">3. Ro'yxatni tanlash</h2>
        <div className="checkbox-group">
          {['Banan', 'Olma', 'Apelsin'].map((fruit) => (
            <div key={fruit} className="checkbox-item">
              <input
                type="checkbox"
                checked={fruits.includes(fruit)}
                onChange={() => toggleFruit(fruit)}
                className="checkbox"
              />
              <label className="checkbox-label">{fruit}</label>
            </div>
          ))}
        </div>
        <div className="result">{fruits.length > 0 && fruits.join(', ')}</div>
      </div>

      <div className="section">
        <h2 className="section-title">4. Rangni tanlash</h2>
        <div className="radio-group">
          {['red', 'green', 'blue'].map((colorOption) => (
            <div key={colorOption}>
              <input
                type="radio"
                id={colorOption}
                name="color"
                value={colorOption}
                onChange={() => setColor(colorOption)}
                className="radio"
              />
              <label htmlFor={colorOption} className="radio-label">
                {colorOption.charAt(0).toUpperCase() + colorOption.slice(1)}
              </label>
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: color }} className="color-box"></div>
      </div>

      <div className="section">
        <h2 className="section-title">5. Emailni tekshirish</h2>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Emailingizni kiriting"
          className="input-field"
        />
        <button onClick={validateEmail} className="button">
          Tekshirish
        </button>
        <p className="result">{emailMessage}</p>
      </div>

      <div className="section">
        <h2 className="section-title">6. To-do ro'yxati</h2>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Vazifani kiriting"
          className="input-field"
        />
        addTask
        <div className="task-list">
          {tasks.map((task, index) => (
            <div key={index} className="task-item">
              <span>{task}</span>
              <button
                onClick={() => deleteTask(index)}
                className="delete-button"
              >
                O'chirish
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
