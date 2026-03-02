const arr = [
  "/svg/easy-1.svg",
  "/svg/easy-2.svg",
  "/svg/easy-3.svg",
  "/svg/easy-4.svg",
  "/svg/easy-5.svg",
];

function Ease() {
  return (
    <section className="bg-[#F6CFCA]">
      <div className="text-center pt-9.75 pb-27">
        <h2 className="text-[88px] mb-11.75 leading-[100%]">
          Ease the pain of <br />
          moving from <br />
          apartment to <br />
          apartment.
        </h2>
        <div className="flex gap-23.5 max-w-5xl m-auto">
            {arr.map((item) => (
            <img src={item} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ease;
