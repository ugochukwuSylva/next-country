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
      <h1 className=" h-[87vh]  center w-[24rem] md:w-[35rem] whitespace-nowrap  md:container">
        Country not found ☹. Something went wrong : )
      </h1>
    );

  return (
    <div className="center h-[87vh] w-[24rem]">
      <p className=" text-lg font-semibold w-full">
        <em className="center">LOADING...</em>
      </p>
    </div>
  );
}

export default LoadingMessage;
