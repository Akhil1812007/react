const parent =React.createElement(
    "div",
    {
        id:"parent"
    },
    [
        React.createElement(
            "div",
            {
                id:"child1"
            },
            React.createElement(
                "h1",
                {},
                "iam a html tag"
            
            )
        
        ),
        React.createElement(
            "div",
            {
                id:"child2"
            },
            React.createElement(
                "h1",
                {},
                "iam a html tag"
            
            )
        
        )
    ]

)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);