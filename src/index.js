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
      <Part1 part1name={props.part1.name} part1number={props.part1.exercises} />
      <Part2 part2name={props.part2.name} part2number={props.part2.exercises} />
      <Part3 part3name={props.part3.name} part3number={props.part3.exercises} />
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
        Numbers of exercises {props.parts}
      </p>
    </div>
  )
  
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total parts={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
