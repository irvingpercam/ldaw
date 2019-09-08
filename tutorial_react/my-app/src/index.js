import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Square extends React.Component {
  /*Constructor para estado
  Queremos que el componente Square "recuerde" los clicks, a su vez llenando la casilla
  correspondiente con una "X". The current value of square is stored in "this.state" and
  it is changed when the Square is clicked.
  */
  constructor(props){
    /**
     * En las clases de JavaScript siempre se debe llamar al método super cuando se define
     * un constructor de una subclase.
     * 
     * Todas clases de componentes de React que tienen un constructor deben empezar con una
     * llamada a super (props).
     */
    super(props);
    this.state = {
      value: null,
    };
  }
  
    render() {
      return (
        <button 
          className="square" 
          /**
           * Se muestra el valor del estado actual cuando es clickeado.
           * Llamar a this.setState desde el manejador onClick en el método render, indicamos
           * a React que re-renderice el cuadrado cuando el button en clickeado. Posteriormente,
           * el valor del estado "this.state.value" cambiará al valor de "X". Cuando se llama
           * a setState en un componente, React actualiza automáticamente los componentes hijos
           * dentro del mismo.
           */
          onClick={() => this.setState({value: 'X'})}
          >
          {this.state.value}
        </button>
      );
    }
  }
  
class Board extends React.Component {
renderSquare(i) {
    return <Square value = {i} />;
}

render() {
    const status = 'Next player: X';

    return (
    <div>
        <div className="status">{status}</div>
        <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        </div>
        <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        </div>
        <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        </div>
    </div>
    );
}
}

class Game extends React.Component {
render() {
    return (
    <div className="game">
        <div className="game-board">
        <Board />
        </div>
        <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
        </div>
    </div>
    );
}
}

// ========================================

ReactDOM.render(
<Game />,
document.getElementById('root')
);
