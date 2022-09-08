import { useState } from 'react'

const StatisticsLine = (props) => {
  const { text, value } = props
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = (props) => {
  const { good, neutral, bad, all, average, positive } = props
  if (!all) {
    return (
      <div>No feedback given</div>
    )    
  }
  return (
    <div>
      <h1>give statistics</h1>
      <table>
        <thead>
          <StatisticsLine text='good' value={good} />
          <StatisticsLine text='neutral' value={neutral} />
          <StatisticsLine text='bad' value={bad} />
          <StatisticsLine text='all' value={all} />
          <StatisticsLine text='average' value={average} />
          <StatisticsLine text='positive' value={positive} />
        </thead>
      </table>
    </div>
  )
}

const Button = (props) => {
  const { text, handleClick } = props
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const updateGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setScore(score + 1)
    setAverage((score + 1) / (all + 1))
    setPositive(((good + 1) / (all + 1)) * 100)
  }

  const updateNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setScore(score + 0)
    setAverage(score / (all + 1))
    setPositive((good / (all + 1)) * 100)
  }

const updateBad = () => {
  setBad(bad + 1)
  setAll(all + 1)
  setScore(score - 1)
  setAverage((score - 1) / (all + 1))
  setPositive((good / (all + 1)) * 100)
}

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text='good' handleClick={updateGood} />
        <Button text='neutral' handleClick={updateNeutral} />
        <Button text='bad' handleClick={updateBad} />
      </div>
      <Statistics good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App
