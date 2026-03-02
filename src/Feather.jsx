import Button from "./Button";

function Feather() {
  return (
    <section className="bg-[#FBF8F5]">
      <div className="max-w-68 w-full m-auto pt-30 pb-30">
        <img src="/img/feather.png" alt="" />
        <p className="mt-[10.25] text-[24px] leading-8 mb-9.75">
          Feather is the stress-free way to furnish your home
        </p>
        <Button width="202px" bg="#E9672B" content="Shop Furniture" />
      </div>
    </section>
  );
}

export default Feather;
