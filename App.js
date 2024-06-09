/*
Insert Hello World from Javascript

const heading = document.createElement("h1");
heading.innerHTML = "Hello World!";
const root = document.getElementById("root");
root.appendChild(heading);
*/

const container = React.createElement("div",{id:"mainDiv"},
    [React.createElement("div",{id:"subDiv1"},
    React.createElement("h1",{id:"subDiv1Header"},"Hello")),
    React.createElement("div",{id:"subDiv1"},
    React.createElement("h1",{id:"subDiv1Header"},"Hello"))]
);

//console.log(container);
//createElement in React takes 3 arguments and are Js object...
//(Html_tag,Html_Attributes,Html_Content)
//const heading = React.createElement("h1",{id:"heading"},"Hello World from React!");

//root is created using createRoot method
const root = ReactDOM.createRoot(document.getElementById("root"));

//and the created element is just rendered
root.render(container);
