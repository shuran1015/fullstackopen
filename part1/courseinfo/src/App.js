import React from 'react'

const Header = (props) => {
  return <h1>{props.course}</h1>
}
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}
/* const Content = (props) => {
 
  return (
    <div>
      <Part part={props.part[0]} exercise={props.exercise[0]} />
      <Part part={props.part[1]} exercise={props.exercise[1]} />
      <Part part={props.part[2]} exercise={props.exercise[2]} />
    </div>
  )
} */
const Content = (props) => {
    
  return (
    <div>
     { props.parts.map(item=>
        <Part key = {item.name} part={item.name} exercise={item.exercises} />
      )}
    </div>
  )
} 
 
/* const Total = (props) => {
   return(
     <p>Number of exercises {props.exercise.reduce((pre,cur)=>{
       return pre+cur;
     })}</p>
   ) 
} */
const Total = (props) => {

  const exercises=props.parts.map(item=>item.exercises)
  //console.log(exercises);
  return(
    <p>Number of exercises {exercises.reduce((pre,cur)=>{
      return pre+cur;
    })}</p>
  ) 
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

    </div>
  )
}

export default App