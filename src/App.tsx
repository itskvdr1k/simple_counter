import { FC, useCallback, useState } from "react";
import {Helmet} from 'react-helmet'

const App: FC = () => {
    const [count, setCount] = useState(0)

    const increaseCount = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])

    const decreaseCount = useCallback(() => {
        setCount(prev => prev - 1)
    }, [])

    return (
        <>
            <Helmet>
                <title>Counter</title>
                <link rel="favicon" href="/favicon.png" />
            </Helmet>
            <div className="counter">
                <h1 className="counter__info">Count is: {count}</h1>
                <div className="counter__buttons">
                    <button className="counter__button" onClick={decreaseCount}>Decrease</button>
                    <button className="counter__button" onClick={increaseCount}>Increase</button>
                </div>
            </div>
        </>
    )
}

export default App