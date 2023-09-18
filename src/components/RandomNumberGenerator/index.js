// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerate = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.onGenerate} className="button">
            Generate
          </button>
          <p className="number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
