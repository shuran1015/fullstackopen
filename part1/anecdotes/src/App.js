import React, { useState, useEffect } from 'react'
const Header = ({ text }) => <h1>{text}</h1>
const Anecdote = ({ text, votes }) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </div>
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [allVotes, setallVotes] = useState(new Array(anecdotes.length).fill(0))

 /*  const mostVoted=allVotes.reduce((pre,cur)=>
      cur>pre?cur:pre
  ) */
  const mostVoted = Math.max(...allVotes)
  const mostVotedIndex = allVotes.indexOf(mostVoted)


  const handleNextClick = () => {
    const nextIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(nextIndex);
  }
  const handleVoteClick = () => {
    /*
    记录一个错误：页面第一次可以正常加载，当click vote以后27行报Uncaught TypeError: Found non-callable @@iterator
    查看以后发现是因为下面写成了{...allVotes}，allVotes变成一个对象了
    */
    const newVotes = [...allVotes]
    newVotes[selected] += 1;
    setallVotes(newVotes);

  }



  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} votes={allVotes[selected]} />
      <button onClick={handleNextClick}>next anecdotes</button>
      <button onClick={handleVoteClick}>vote</button>
      <Header text="Anecdote with the most votes" />
      {mostVoted === 0?<p>还没有呢</p> : <Anecdote text={anecdotes[mostVotedIndex]} votes={mostVoted} />}
    </div>
  )
}

export default App