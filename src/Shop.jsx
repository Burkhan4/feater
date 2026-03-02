const imgs = [
  { url: "/img/shop-img1.png", text: "Living Room", color: "#CBC6F4" },
  { url: "/img/shop-img2.png", text: "Bedroom", color: "#E7CB43" },
  { url: "/img/shop-img3.png", text: "Home Office", color: "#A2D4C5" },
  { url: "/img/shop-img4.png", text: "Dining Room", color: "#AF4920" },
];

function Shop() {
  return (
    <section className="bg-[#FBF8F5]">
      <div className="container text-center">
        <h2 className="text-[48px] text-[#000000] mb-10.75">Shop by Room</h2>
        <div className="grid grid-cols-4 w-272.5 ml-23.5 pb-17.75">
          {imgs.map((item, index) => (
            <div
              key={index}
              style={{
                borderColor: item.color,
                "--shadow-color": item.color,
              }}
              className={`w-61.75 h-64.25 text-center border-2 duration-200 cursor-pointer hover:shadow-[8px_8px_0px_0px_var(--shadow-color)]`}
            >
              <img src={item.url} alt={item.text} className="mx-auto" />
              <p className="mt-3.75 text-[17px] text-[#000000]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
