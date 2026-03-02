function Button({ width, bg, content }) {
  return (
    <button
      style={{ width: width, backgroundColor: bg }}
      className="text-[#000000] h-15 rounded-[30px] transition-all hover:opacity-80 cursor-pointer duration-300 m-auto"
    >
      {content}
    </button>
  );
}

export default Button;