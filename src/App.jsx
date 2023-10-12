import React from "react";

const Button = (props) => {
  return(
    <button className={'h-10 px-6 font-semibold rounded-md bg-${props-variant}-700 text-white'} type="submit"
    >
      Buy now 
    </button>
  );
};

function App () {
  return (
    <div className="flex justify-center bg-blue-500 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button variant="red"/>
        <Button variant="slate"/>
      </div>
    </div>
  );
}

export default App;