import './App.css'
import Board from './components/Board';
import Header from './components/Header';
import Player from './components/Player';
import './style.css'

// We want the Player component to be able to show us which player
//  we can do that using props
//  we pass props in when we render the component
//  label what the props will be called and provide the value
function App() {
  return (
    <>
      <Header />
      <Player whichPlayer="X"/>
      <Player whichPlayer="O"/>
      <Board />
    </>
  )
}

export default App