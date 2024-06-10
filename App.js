import React from "react";
import ReactDOM from "react-dom/client";

//JSX - HTML_LIKE or XML_LIKE syntax
//JSx => React.createElement => ReactElement-JS Object => HTMLElement(render) 
const jsxHeading = (<h1 id="heading">JSX Element created 🚀</h1>);

//React Functional Component
const Heading = () => <h1 className="head">Hello World!</h1>;
const HeadingComponent = ()=> (
    <div id="container">
        <Heading/>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);






/*
Insert Hello World from Javascript

const heading = document.createElement("h1");
heading.innerHTML = "Hello World!";
const root = document.getElementById("root");
root.appendChild(heading);
*/

// const container = React.createElement("div",{id:"mainDiv"},
//     [React.createElement("div",{id:"subDiv1"},
//     React.createElement("h1",{id:"subDivHeader1"},"Hello1")),
//     React.createElement("div",{id:"subDiv2"},
//     React.createElement("h1",{id:"subDivHeader2"},"Hello2"))]
// );

//console.log(container);
//createElement in React takes 3 arguments and are Js object...
//(Html_tag,Html_Attributes,Html_Content)
//const heading = React.createElement("h1",{id:"heading"},"Hello World from React!");

//root is created using createRoot method
// const root = ReactDOM.createRoot(document.getElementById("root"));

//and the created element is just rendered
// root.render(container);
//React element
// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Not Rendered"
// );
