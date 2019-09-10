import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// class Square extends React.Component {
//   /*Constructor para estado
//   Queremos que el componente Square "recuerde" los clicks, a su vez llenando la casilla
//   correspondiente con una "X". El valor actual de square es guardado en "this.state" y
//   este cambia cuando Square es clickeado.
//   */
//   // constructor(props){
//   //   /**
//   //    * En las clases de JavaScript siempre se debe llamar al método super cuando se define
//   //    * un constructor de una subclase.
//   //    * 
//   //    * Todas clases de componentes de React que tienen un constructor deben empezar con una
//   //    * llamada a super (props).
//   //    */
//   //   super(props);
//   //   this.state = {
//   //     value: null,
//   //   };
//   // }
//   // Este constructor queda como comentario, ya que en cierta parte del tutorial, el constructor
//   // se debe eliminar porque el componente ya no hace seguimiento del estado del juego.
  
//   /**
//     * Cuando un cuadrado es clickeado, la función onClick provista por el componente Board
//     * es llamada.
//     * 
//     * 1. El prop onClick le indica a React que establezca un escuchador del evento Click.
//     * 2. Cuando el botón es clickeado, React llama al manejador de evento onClick que está
//     * definido en el método render() de Square.
//     * 3. El manejador de evento, llama a this.props.onClick(). El prop onClick del compone-
//     * nte onClick está especificado por el componente Board.
//     * 4. Dado que en Board pasa onClick = {() => this.handleClick{i}} a Square, el compone-
//     * nte Square llama a this.handleClick(i) cuando es clickeado.
//     */
//     render() {
//       return (
//         <button 
//           className="square" 
//           /**
//            * Se muestra el valor del estado actual cuando es clickeado.
//            * Llamar a this.setState desde el manejador onClick en el método render, indicamos
//            * a React que re-renderice el cuadrado cuando el button en clickeado. Posteriormente,
//            * el valor del estado "this.state.value" cambiará al valor de "X". Cuando se llama
//            * a setState en un componente, React actualiza automáticamente los componentes hijos
//            * dentro del mismo.
//            */

//           onClick = {() => this.props.onClick()}
//           >
//           {this.props.value}
//         </button>
//       );
//     }
//   }
/**
 * Se va a almacenar el estado del juego en el componente padre Board en vez de cada componente
 * Square. El componente Board puede decirle a cada cuadrado que mostrar pasándole un prop.
 * 
 * Para tener recopilar datos de múltiples hijos, o comunicar dos componentes hijos entre sí,
 * necesitamos declarar el estado compartido de su componente padre. El componente padre puede
 * pasar el estado hacia los hijos usando props, así manteniendo los componentes hijos sincro-
 * nizados entre ellos y con su componente padre.
 */  

/**
 * Componentes de función
 * 
 * Se escribe una función que toma props como parámetros y retorna lo que se debe renderizar.
 */
function Square(props){
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
/**
 * Se añade un constructor para establecer el estado inicial de Board para contener un arreglo
 * con 9 valores nulos (null). Estos 9 valores corresponden a los 9 cuadrados.
 */
  /**
   * Se elimina el constructor para transformar el componente Board.
   */
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     /**
  //      * Para la parte de tomar turnos, se establece el primer movimiento a ser una "X" por
  //      * defecto modificando el estado inicial en el constructor del componente Board.
  //      * 
  //      * Cada que el jugador realice un movimiento, xIsNext (booleano) será invertido para
  //      * determinar el jugador que sigue y guardar el estado correspondiente.
  //      */
  //     xIsNext: true,
  //   };
  // }
  /**
   * Gracias a este método, el estado está almacenado en el componente Board en lugar de almace-
   * narlo en cada componente Square. Cuando el estado del Board cambia, los componentes Square
   * se re-renderizan automáticamente. Mantener el estado de todos los cuadrados en el componente
   * Board permite ayudar a determinar el ganador.
   * 
   * Los componentes Square reciben valores del componente Board e informan al mismo cuando son
   * clickeados. Para términos de React, los componentes Square son componentes controlados.
   */
  // handleClick(i) {
  //   // Principio de Inmutabilidad
  //   const squares = this.state.squares.slice(); //slice() crea una copia del array de squares
  //   // posteriormente, esta copia se utiliza para realizar modificaciones, conservando el arrar
  //   //original
  //   // La siguiente condición retorna si alguien ha ganado el juego, o bien, si un cuadrado ya está
  //   // rellenado.
  //   if (calculateWinner(squares) || squares[i]){
  //     return;
  //   }
  //   squares[i] = this.state.xIsNext ? 'X' : 'O';
  //   this.setState({
  //     squares: squares,
  //     xIsNext: !this.state.xIsNext, //Esta linea invierte el valor de xIsNext para tomar turnos.
  //     });
  // }
  /**
   * Haciendo referencia al principio de inmutabilidad, se decriben los siguientes beneficios:
   * 
   * Las funciones complejas se vuelven más simples
   * 
   * Esto nos sirve en el proyecto actual para poder realizar la parte de "viaje en el tiempo",
   * o bien, repasar el historial de movimientos. En general, esto se puede utilizar en el software
   * para realizar funciones de "hacer" y "deshacer".
   * La inmutabilidad permite mantener intactas versiones previas del historial del juego, para
   * reusarlas posteriormente.
   * 
   * Detectar cambios
   * 
   * Detectar cambios inmutables es más sencillo. Si el objeto inmutable al que se está haciendo
   * referencia es diferente del anterior, significa que este objeto ha cambiado.
   * 
   * Determinar cuando re-renderizar en React
   * 
   * Esto nos ayuda a construir componentes puros en React. Los datos inmutables nos pueden ayudar
   * a determinar fácilmente si se realizó algún cambio, y con esto podemos determinar cuando un
   * componente requiere ser re-renderizado, esto nos ayuda a optimizar el rendimiento. 
   * Véase el método shouldComponentUpdate().
   */

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
        value = {this.props.squares[i]}
        onClick = {() => this.props.onClick(i)} 
        />
    );
}

render() {
    // //Esta línea ayuda a mostrar en el Board qué jugador tiene el siguiente turno.
    // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    // Se manda a llamar a la función "calculateWinner", para revisar si un jugador ha ganado.
    /**
     * Dado que el componente está renderizando el estado del juego, podemos eliminar el código
     * correspondiente del método render.
     */
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if (winner){
    //   status = 'Winner: ' + winner;
    // } else {
    //   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    // }
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
/**
 * Para que el componente superior Game pueda mostrar los un historial de movimiento, se le otorga
 * acceso a al historial, por lo que se coloca el estado history dentro del componente "Game".
 * Dicho estado, da completo control sobre el "Board" al componente Game, esto permite que el
 * tablero pueda renderizar los turnos previos desde history.
 */
class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    }
  }
  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length -1];
    // Principio de Inmutabilidad
    const squares = this.state.squares.slice(); //slice() crea una copia del array de squares
    // posteriormente, esta copia se utiliza para realizar modificaciones, conservando el arrar
    //original
    // La siguiente condición retorna si alguien ha ganado el juego, o bien, si un cuadrado ya está
    // rellenado.
    if (calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      /**
       * A diferencua de push(), el método concat() no muta el array original.
       */
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext, //Esta linea invierte el valor de xIsNext para tomar turnos.
      });
  }
  render() {
    /**
     * Se actualiza el método render para usar la entrada más reciente del historial para determinar
     * y mostrar el estado del juego.
     */
      const history = this.state.history;
      const current = history[history.length - 1];
      const winner = calculateWinner(current.squares);
    /**
     * Mapeando el historial de movimientos a elementos de React presentando botones en pantalla, y
     * mostrando una lista de botones para "saltar" a movimientos anteriores.
     */
      const moves = history.map((step, move) => {
        const desc = move ?
        'Go to move #' + move :
        'Go to move game start';
        return (
          /**
           * Por cada movimiento en el historial de juego, creamos un elemento de lista <li> que
           * contiene un boton <button>.
           */
          <li>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
      let status;
      if (winner){
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
      return (
      <div className="game">
          <div className="game-board">
          <Board 
            squares = {current.squares}
            onClick={(i) => this.handleClick(i)}
          />
          </div>
          <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
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

/**
 * Esta función es definida por el tutorial, y su propósito ayudarnos a determinar a un ganador.
 * 
 * Dado un arreglo de 9 cuadrados, esta función comprobará si hay un ganador, y devolverá "X", "O" o NULL
 * según corresponda.
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}