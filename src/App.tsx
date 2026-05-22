import { useMemo, useState } from "react";

import "./App.css";
import useDebounceHook from "./hooks/useDebounceHook";

function App() {
  const [count, setCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // const printSearchQuery = useDebounceHook((qu: string) => {
  //   console.log("We are printing searchQuery", qu);
  // }, 1000);
  const printSearchQuery = useMemo(() => {
    return useDebounceHook((qu: string) => {
      console.log("We are debouncing", "query", qu);
    }, 500);
  }, []);

  return (
    <>
      <section id="center">
        <div>
          <h1>{count}</h1>
        </div>
        <button>+</button>
        <button>-</button>
        <input
          value={searchQuery}
          onChange={(e) => {
            (setSearchQuery(e.target.value), printSearchQuery(e.target.value));
          }}
        />
      </section>
    </>
  );
}

export default App;
