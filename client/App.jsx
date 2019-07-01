import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';
import Square from './Square.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <Board />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
