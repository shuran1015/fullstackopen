import React, { useState, useEffect } from 'react'

const Header = (props) => <h1>{props.title}</h1>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const Statistic=(props)=> <tr><td>{props.text} {props.num}</td></tr>


const Statistics = (props) => {
  console.log(props.total)
  if (props.total === 0) {
    return <div>No feedback</div>
  }
  return (
    <div>
      {
        props.data.map((item) => <Statistic text={item.text} num={item.num}/>)
      }
    </div>
  )



}




const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, settotal] = useState(0)


  useEffect(() => {
    settotal(good + neutral + bad)
  }, [good, neutral, bad])

  const data = [
    {
      text: "good",
      num: good
    },
    {
      text: "neutral",
      num: neutral
    },
    {
      text: "bad",
      num: bad
    },
    {
      text: "all",
      num: total
    },
    {
      text: "average",
      num: good * 1 + neutral * 0 + bad * -1
    },
    {
      text: "positive",
      num: `${good * 100 / total}%`
    }
  ]

  const handleClick = (who) => () => {
    switch (who) {
      case "good":
        setGood(good + 1)
        break;
      case "neutral":
        setNeutral(neutral + 1)
        break;
      case "bad":
        setBad(bad + 1)
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Header title="give feedback" />
      <Button onClick={handleClick("good")} text="good" />
      <Button onClick={handleClick("neutral")} text="neutral" />
      <Button onClick={handleClick("bad")} text="bad" />
      <Header title="Statistics" />
      <Statistics data={data} total={total} />
    </div>
  )
}

export default App