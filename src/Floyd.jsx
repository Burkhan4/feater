import Button from "./Button"

function Floyd() {
  return (
    <section className="bg-[#FBF8F5]">
      <div className="container">
        <div className="flex">
          <img src="/img/floyd.png" alt="" />
          <div className="h-85.75 py-22.75 px-10.5 bg-[#E9672B] w-md text-center">
            <img className="m-auto" src="/svg/floyd.svg" alt="" />
            <h2 className="mt-6 text-[36px] text-[#FFFFFF] leading-11 mb-8">Floyd Furniture Meets Feather Flexibility</h2>
            <Button width="272px" bg="#FFFFFF" content="Explore Floyd Furniture" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Floyd;
