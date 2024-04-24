import Link from "next/link";

function GoBackPage() {
  return (
    <div className="flex items-center flex-col gap-8 mt-10 ">
      <p className="text-xl font-semibold">No username provided ☹</p>

      <Link className="hover:text-blue-400 hover:underline text-lg" href={"/"}>
        &larr; Go back{" "}
      </Link>
    </div>
  );
}

export default GoBackPage;
