import React from 'react';
import ReactDOM from 'react-dom';
const parent=React.createElement(
    "div",
    {id:"heading"},
   [ React.createElement(
        "div",
        {id:"child"},
       [React.createElement(
            "h1",
            {},
            "I am  Tag"
        ),
        React.createElement(
            "h2",
            {},
            "My name  kumar"
        )

       ]
    ),
    React.createElement(
        "div",
        {id:"child 2"},
       [React.createElement(
            "h1",
            {},
            "wow nice awesome"
        ),
        React.createElement(
            "h2",
            {},
            "we are waiting"
        )

       ]
    )

]
);

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);