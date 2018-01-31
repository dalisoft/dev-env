import { createElement, Component } from 'react'
import { render } from 'react-dom'
import style from './style.css'

class App extends Component {
  render () {
    return (<h1>Dummy text from client</h1>)
  }
}

render(<App />, document.getElementById('app'))
