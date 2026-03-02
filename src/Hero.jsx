import Button from "./Button";

function Hero() {
  return (
    <section className="bg-[#FBF8F5]">
      <div className="container">
        <div className="flex justify-between">
          <div className="pl-24 pt-30.5">
            <h1 className="text-[64px] text-[#000000] leading-19 mb-4.5">
              Curated and <br />
              Convenient
            </h1>
            <p className="max-w-130.75 text-[18px] text-[#000000] mb-11.5">
              We've built our offerings on the principle that everyone deserves
              high-quality design without the high cost. We offer elevated
              rental inventory, to transform your space. Reuse and recycle - we
              make the decision as light as a “feather”
            </p>
            <Button width="154px" bg="#E9672B" content="Get Started" />
          </div>
          <div>
            <img className="mb-9" src="/img/hero-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
