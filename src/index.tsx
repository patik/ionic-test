import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

function makeStr(length: number) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const generateListItems = (prefix: number | string) => {
  const result = []
  for (let i = 0; i < 500; i++) {
    result.push({
      line1: `${prefix} ${makeStr(25)}`,
      line2: `${prefix} ${makeStr(10)}`,
      line3: `${prefix} ${makeStr(15)}`
    })
  }
  return result
}

ReactDOM.render(
  <App data={[generateListItems(1), generateListItems(2), generateListItems(3)]} />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
