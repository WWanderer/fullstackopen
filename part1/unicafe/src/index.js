import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <button onClick={props.handler}>{props.text}</button>
    )
}

const Statistic = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({ good, neutral, bad }) => {
    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <p>No feedback given</p>
        )
    } else {
        return (
            <table>
                <tbody>
                    <Statistic text='good' value={good}></Statistic>
                    <Statistic text='neutral' value={neutral}></Statistic>
                    <Statistic text='bad' value={bad}></Statistic>
                    <Statistic text='total' value={good + neutral + bad}></Statistic>
                    <Statistic text='average' value={(good - bad) / (good + neutral + bad)}></Statistic>
                    <Statistic text='positive' value={((good / (good + neutral + bad)) * 100).toString().concat('%')}></Statistic>
                </tbody>
            </table>
        )
    }
}


const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const plusGood = () => {
        setGood(good + 1)
    }

    const plusNeutral = () => {
        setNeutral(neutral + 1)
    }

    const plusBad = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button handler={plusGood} text='good'></Button>
            <Button handler={plusNeutral} text='neutral'></Button>
            <Button handler={plusBad} text='bad'></Button>

            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)