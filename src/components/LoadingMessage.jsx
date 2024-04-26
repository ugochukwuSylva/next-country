import { useEffect, useState } from "react";

function LoadingMessage() {
  const [count, setCount] = useState(4);

  useEffect(() => {
    const id = setTimeout(() => {
      setCount((prev) => (prev === 0 ? prev : prev - 1));
    }, 1000);

    return () => clearTimeout(id);
  }, [count]);

  if (!count)
    return (
      <h1 className="center  container">
        Country not found ☹. Something went wrong : )
      </h1>
    );

  return (
    <div className="center">
      <p className=" text-lg font-semibold">
        <em>LOADING...</em>
      </p>
    </div>
  );
}

export default LoadingMessage;
