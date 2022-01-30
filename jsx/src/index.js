import React from 'react';
import ReactDOM from 'react-dom';


let text = 'hello there'
const App = () => {
    return (
        <div>
            <h1 style={{color: 'blue'}} className="class">{text} </h1>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)