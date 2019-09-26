import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
      <div>
          {props.course}
      </div>
    )
    
}

const Content = (props) => {
  console.log(props.part1.name)
  return (    
    <div>
      <Part1 part1name={props.parts[0].name} part1number={props.parts[0].exercises} />
      <Part2 part2name={props.parts[1].name} part2number={props.parts[1].exercises} />
      <Part3 part3name={props.parts[2].name} part3number={props.parts[2].exercises} />
    </div>
  )
  
}

const Part1 = (props) => {
  return(
    <div>
      <p>
        {props.part1name} {props.part1number}
      </p>
        
    </div>

  )
}

const Part2 = (props) => {
  return(
    <div>
      <p>
        {props.part2name} {props.part2number}
      </p>
    </div>

  )
}

const Part3 = (props) => {
  return(
    <div>
      <p>
        {props.part3name} {props.part3number}
      </p>
      
    </div>

  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Numbers of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
  
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
