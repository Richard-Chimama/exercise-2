import React, {useState, useEffect} from 'react'

const Hero = () => {
    const [time, setTimer] = useState(new Date())

    
    const [counter, setCounter] = useState (0)

    useEffect(()=>{
        const TimerId = setInterval(tick, 1000)
    }, [])

    function tick(){
        setTimer(new Date())
    }

    function handleClick() {
        setCounter(counter + 1)

    }
    function handleReset() {
        setCounter(0)
    }

  return (
    <section id="hero-bg">
        <h1 className="title">Hi there!</h1>
        <p>{time.toLocaleTimeString()}</p>
        <button  id="btn-counter" onClick={handleClick}>Counter: {counter}</button>
        <button  id="btn-reset" onClick={handleReset}> Reset counter</button>
    </section>
  )
}

export default Hero