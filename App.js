import React from 'react';
import  ReactDOM  from 'react-dom/client';



const parcel= React.createElement("h1", {}, "This is Parcel");
const headin1=React.createElement("h1", {}, "This is Heading 1");
const container= React.createElement("div", {}, [headin1,parcel]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
