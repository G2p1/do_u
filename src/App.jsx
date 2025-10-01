import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import video from '/vi.mp4'

const buttonSize=50;
const sizeIncrement=10;

function App() {
const [size, setSize] = useState(buttonSize);
  const [show, setShow] = useState(true);
  const[text, setText] = useState('');
  const videoRef = useRef(null);
  const [final, setFinal] = useState(true);

  const [position, setPosition] = useState({top: '50%', left: '50%'});

  const [first, setFirst] = useState(true);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function eventNo(){
    
      setText('Можливо колись ти будеш в цьому сумніватись, як ця кнопка, це буде наростати... Але це завжди буде неправдою!!! Навіть якщо ти так подумаєш, ти моя прєлєсть, я тебе обожнюю, ти для мене важливіша ніж все що завгодна! я готовий днями, роками, десятиліттями просто чекати на тебе! Ти мій промінчик сонця, без тебе я засохну, ти мій маяк в непроглядний шторм, ти моє все і я дорожу тобою найбільше<3 так це зараз лише слова, але я дам змогу тобі побачити це на ділі!!! цьом^~^');
      setShow(false);
    }

  function eventYes(){
    if(first){
      setText('Павильно моя вумнічка!!! Ти точно в це віриш?');
      setFirst(false);
    }
    else{
      setSize(size+sizeIncrement);
    }
  }

  function eventMi(){
    setFinal(false);
    if (videoRef.current) {
      // Викликаємо вбудований метод .play() елемента HTML <video>
      videoRef.current.play()
        .catch(error => {
          // Обробка помилки (наприклад, якщо браузер блокує автозапуск)
          console.error("Помилка відтворення відео:", error);
          alert("Не вдалося запустити відео. Можливо, ваш браузер блокує його.");
        });
    }
  }

  useEffect(()=>{
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
    height: window.innerHeight,
      });
    };
    setFirst(true);
    setText('Як ти думаєш, я тебе ЛЮБЛЮ?');
    window.addEventListener('resize', handleResize);
    return() =>window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <>
      <div className='text' style={{display: final? 'block' : 'none'}}>{text}</div>
      <video ref={videoRef} src={video} width="90%" style={{display: !final? 'block' : 'none'}}></video>
      <button className='yes' onClick={eventYes} style={{display: show ? 'inline' : 'none'}}>
        YES
      </button>
      <button className='no' onClick={eventNo} style={{width: `${size+15}px`, height: `${size}px`, display: show ? 'inline' : 'none'}}>
        NO
      </button>
      <button className='heart' style={{display: !show ? 'inline' : 'none'}} onClick={eventMi}> тицьні сюди бубласька</button>
    </>
  )
}

export default App
