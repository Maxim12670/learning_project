import { useMemo, useState } from "react";

const sum = (n: number) => {
  console.log("i work");
  return n + n;
};

function App() {
  const [num, setNum] = useState<number>(1);
  const [isGreen, setIsGreen] = useState<boolean>(false);
  const result = useMemo(() => sum(num), [num]);

  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "green" : "red" }}
      >
        yyyyy
      </h1>
      <h2>Sum {result}</h2>
      <button onClick={() => setNum(num + 1)}>➕</button>
    </div>
  );
}

export default App;
