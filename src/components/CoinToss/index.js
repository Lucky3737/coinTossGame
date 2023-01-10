// Write your code here
import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {count: 0, heads: 0, tails: 0, isHead: 'heads'}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    let headcount = 0
    let tailsCount = 0
    if (tossResult === 0) {
      headcount += 1
    } else {
      tailsCount += 1
    }
    let result
    if (tossResult === 0) {
      result = 'heads'
    } else {
      result = 'tails'
    }

    this.setState(preState => {
      console.log(headcount)
      return {
        count: preState.count + 1,
        heads: preState.heads + headcount,
        tails: preState.tails + tailsCount,
        isHead: result,
      }
    })
  }

  render() {
    const {count, heads, tails, isHead} = this.state
    const headOrTails =
      isHead === 'heads' ? (
        <img
          className="img-size"
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          alt="toss result"
          className="img-size"
        />
      )
    return (
      <div className="app">
        <div className="coin-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {headOrTails}
          <div>
            <button type="button" className="btn" onClick={this.tossCoin}>
              Toss Coin
            </button>
          </div>
          <div className="count-card">
            <p>Total: {count}</p>
            <p>Heads:{heads}</p>
            <p>Tails: {tails} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
