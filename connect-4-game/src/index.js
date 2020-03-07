import React from 'react';
import ReactDOM from 'react-dom';

function Circle(props){
    var style = {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "100%",
        paddingTop: "98%"
    }
    return(
        <div style = {style}></div>
    )
}

ReactDOM.render(
    <Circle/>,
    document.getElementById('root')
)

