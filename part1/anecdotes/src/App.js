import { useState } from 'react'

const App = () => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints ]= useState({})
  const [mostVoted, setMostVoted] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const getAnecdote = () => {
    const selected = Math.floor(Math.random() * anecdotes.length)
    setSelected(selected)
  }

  const updateVotes = () => {
    const copy = {...points}
    if (points[selected] === undefined) {
      copy[selected] = 1
    } else {
      copy[selected] += 1
    }
    setPoints(copy)

    const arrPoints = [0, 0, 0, 0, 0, 0, 0]
    for (const idx in copy) {
      arrPoints[idx] = copy[idx]
    }
    const maxPoints = Math.max(...arrPoints) 
    setMostVoted(arrPoints.indexOf(maxPoints))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected] === undefined ? 0 : points[selected]} votes</div>
      <button onClick={updateVotes}>vote</button>
      <button onClick={getAnecdote}>next anectode</button>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[mostVoted]}</div>
    </div>
  )
}

export default App