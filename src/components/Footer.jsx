function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className=" bg-stone-700 h-20 text-center flex justify-center items-center">
      <p className=" text-stone-200 ">
        &copy; All right reserved by{" "}
        <span className="font-semibold">Nwaba Ugochukwu</span> {date}
      </p>
    </footer>
  );
}

export default Footer;
