import React from "react";
import Kino from "./Kino";

const App = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 ">
      {Kino.map((item) => (
        <div key={item.id}>
          <img
            className="w-50 h-50 object-cover justify-content center"
            src={item.image}
            alt={item.title}
          />
          <h2 className="text-4xl ">{item.title}</h2>
          <p className="text-gray-600  ">{item.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded gap-2 mt-2">
            {" "}
            {item.button}
            {""}
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
