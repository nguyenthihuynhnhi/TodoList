import { useState } from "react";

import "./App.css";
import User from "./components/User/User";
import Task from "./components/Task/Task";

function App() {
  return (
    <div className="px-20">
      <section className="py-10">
        <User />
      </section>
      <section>
        <Task />
      </section>
    </div>
  );
}

export default App;
