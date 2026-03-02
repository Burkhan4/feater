const arr = [
  {
    img: "/img/bestsellers-1.png",
    p: "Cooper Dining Table",
    p2: "/moor buy for $359 $314",
    span: "$15",
  },
  {
    img: "/img/bestsellers-2.png",
    p: "Croft Media Console",
    p2: "/moor buy for $839 $739",
    span: "$35",
  },
  {
    img: "/img/bestsellers-3.png",
    p: "Essex Dining Chair",
    p2: "/moor buy for $429 $379",
    span: "$18",
  },
  {
    img: "/img/bestsellers-3.png",
    p: "Ludlow Sofa",
    p2: "/moor buy for $1249 $1099",
    span: "$52",
  },
];

function Bestsellers() {
  return (
    <section className="mt-50.75 bg-[#FBF8F5] pt-28">
      <div className="container text-center pb-36">
        <h2 className="text-[36px] mb-14.25">Shop our Bestsellers</h2>
        <div className="max-w-236 grid grid-cols-4 m-auto mb-13.75">
          {arr.map((item) => (
            <div className="py-10 px-8 w-58.25 gap-1 h-107.5 bg-[#FFFFFF] duration-200 cursor-pointer hover:shadow hover:-translate-y-1">
            <img src={item.img} alt="" />
            <p className="mt-7.75 mb-2 text-[18px]">{item.p}</p>
            <p className="leading-[180%] text-[18px]">
              rent for <span className="text-[#E9672B]">{item.span}</span>{item.p2}
            </p>
          </div>
          ))}
        </div>
        <p className="text-[#E9672B] text-[18px] transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer">Shop All Furniture</p>
      </div>
    </section>
  );
}

export default Bestsellers;
