import React, { useState } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0 })
    const [status, setStatus] = useState()

    let updhr = time.hr
    let updmin = time.min
    let updsec = time.sec
    let updmilli = time.milli

    const start = () => {
        setStatus(setInterval(myFunc, 10))
    }

    const stop = () => {
        clearInterval(status)
    }

    const reset = () => {
        clearInterval(status)
        setTime({ hr: 0, min: 0, sec: 0, milli: 0 })
    }

    const myFunc = () => {
        if (updmilli === 100) {
            updmilli = 0;
            updsec++
        }

        if (updsec === 60) {
            updsec = 0;
            updmin++
        }

        if (updmin === 60) {
            updmin = 0;
            updhr++
        }

        updmilli++
        return setTime({ hr: updhr, min: updmin, sec: updsec, milli: updmilli })
    }


    return (
        <div className='container'>
            <h1>{time.hr + " : " + time.min + " : " + time.sec + " : " + time.milli}</h1>
            <div className="buttons">
                <button className='start' onClick={start}>Start</button>
                <button className='stop' onClick={stop}>Stop</button>
                <button className='reset' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch
