function Enjoy({ isReverce, img, h1, p, a }) {
  return (
    <div
      className={`flex items-center justify-between mb-16 ${
        isReverce ? "flex-row-reverse" : ""
      }`}
    >
      <div className="pl-21.25 pr-25">
        <h1 className="text-[36px] mb-5 max-w-105 w-full leading-11">
          {h1}
        </h1>

        <p className="text-[18px] max-w-110 w-full mb-8.25">
          {p}
        </p>

        <a href="#">
          <p className="text-[#E9672B] text-[18px] transition-all duration-300 ease-out hover:-translate-y-1">
            {a}
          </p>
        </a>
      </div>

      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Enjoy;