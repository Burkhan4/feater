import Enjoy from "./Enjoy";

function Keepeng() {
  return (
    <section className="container">
      <div className="text-center pt-32.75 pb-31.5">
        <h2 className="text-[36px] mb-4">
          “Keeping Furniture in Homes and out of Landfills."
        </h2>
        <p className="leading-8 text-[24px]">
          This isn’t just another rental company - We’re elevating the future of
          furniture by <br />
          replacing the commitment of ownership with a culture of sharing in a
          way that’s <br />
          curated, convenient, and sustainable.
        </p>
      </div>
      <Enjoy
        isReverce={false}
        img="/img/enjoy-1.png"
        h1="Enjoy a fully furnished space in less than week"
        p="Feather furniture is available to be delivered and assembled in New York City, Los Angeles and San Francisco."
        a="Explore Furniture"
      />
      <Enjoy
        isReverce={true}
        img="/img/enjoy-2.png"
        h1="Garage Sale - 40% & Up"
        p="Our Garage Sale is open! Savings start at 40% on favorite retired pieces. Find dressers, sofas, decor, and more to make the year one to remember. Terms and conditions apply.View here."
        a="Shop Now"
      />
      <Enjoy
        isReverce={false}
        img="/img/enjoy-3.png"
        h1="Furniture for business, made simple."
        p="Say goodbye to cost, complexity, and commitment of furniture. Feather makes it easy with affordable rental plans, white glove delivery and best-in-class account service."
        a="Visit Feather For Business"
      />
      <Enjoy
        isReverce={true}
        img="/img/enjoy-4.png"
        h1="Never assemble furniture again."
        p="We move a lot. There are countless floor plans and roommates (oh, and your evolving tastes) between here and there. With Feather, furnish your space without breaking a sweat or reaching for a screwdriver."
        a="How Feather Works"
      />
    </section>
  );
}

export default Keepeng;
