import React from "react";
import ReactDOM from "react-dom";

const Alert = () => {
  const colorClasses = {
    color: "red",
    text4Red: "OMG! Something really bad has happended!",
    text4Orange: "Well, it is not that bad after all!"
  };
  // console.log(colorClasses.color);
  //your component here
  if (colorClasses.color === 'red') {
    //for red color
    return (
      <div className="alert alert-danger" role="alert">
        {colorClasses.text4Red}

      </div>)

  }
  //for yellow color
  return (
    <div className="alert alert-warning" role="alert">
      {colorClasses.text4Orange}
    </div>
  )



};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
  <Alert />,
  document.getElementById("root")
);
