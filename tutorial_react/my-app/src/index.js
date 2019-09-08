import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Square extends React.Component {
  /*Constructor para estado
  Queremos que el componente Square "recuerde" los clicks, a su vez llenando la casilla
  correspondiente con una "X". El valor actual de square es guardado en "this.state" y
  este cambia cuando Square es clickeado.
  */
  // constructor(props){
  //   /**
  //    * En las clases de JavaScript siempre se debe llamar al método super cuando se define
  //    * un constructor de una subclase.
  //    * 
  //    * Todas clases de componentes de React que tienen un constructor deben empezar con una
  //    * llamada a super (props).
  //    */
  //   super(props);
  //   this.state = {
  //     value: null,
  //   };
  // }
  // Este constructor queda como comentario, ya que en cierta parte del tutorial, el constructor
  // se debe eliminar porque el componente ya no hace seguimiento del estado del juego.
  
  /**
    * Cuando un cuadrado es clickeado, la función onClick provista por el componente Board
    * es llamada.
    * 
    * 1. El prop onClick le indica a React que establezca un escuchador del evento Click.
    * 2. Cuando el botón es clickeado, React llama al manejador de evento onClick que está
    * definido en el método render() de Square.
    * 3. El manejador de evento, llama a this.props.onClick(). El prop onClick del compone-
    * nte onClick está especificado por el componente Board.
    * 4. Dado que en Board pasa onClick = {() => this.handleClick{i}} a Square, el compone-
    * nte Square llama a this.handleClick(i) cuando es clickeado.
    */
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

          onClick = {() => this.props.onClick()}
          >
          {this.props.value}
        </button>
      );
    }
  }
/**
 * Se va a almacenar el estado del juego en el componente padre Board en vez de cada componente
 * Square. El componente Board puede decirle a cada cuadrado que mostrar pasándole un prop.
 * 
 * Para tener recopilar datos de múltiples hijos, o comunicar dos componentes hijos entre sí,
 * necesitamos declarar el estado compartido de su componente padre. El componente padre puede
 * pasar el estado hacia los hijos usando props, así manteniendo los componentes hijos sincro-
 * nizados entre ellos y con su componente padre.
 */  
class Board extends React.Component {
/**
 * Se añade un constructor para establecer el estado inicial de Board para contener un arreglo
 * con 9 valores nulos (null). Estos 9 valores corresponden a los 9 cuadrados.
 */
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  /**
   * Modificamos este método renderSquare para que lea desde el arreglo.
   * 
   * Pasamos una función como prop desde Board a Square y hacemos que Square llame a esa función
   * cuando un cuadrado sea clickeado.
   * 
   * Estamos pasando dos props desde Board a Square: value y onClick.
   */
  renderSquare(i) {
    return (
      <Square 
        value = {this.state.squares[i]}
        onClick = {() => this.handleClick(i)} 
        />
    );
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
