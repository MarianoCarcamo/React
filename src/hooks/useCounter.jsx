import { useState } from "react"

export const useCounter = (initValue = 0, maxValue = 1, step = 1) => {
    const [count, setCount] = useState(initValue)

    const increment = () => {
        if(count + step <= maxValue) {
            setCount(count + step)
        }
    }

    const decrement = () => {
        if(count - step >= initValue) {
            setCount(count - step)
        }
    }

    const reset = () => {
        setCount(initValue)
    }

    return([count, increment, decrement, reset])
}