function Navbar() {
  return (
    <nav className="bg-[#FBF8F5]">
      <div className="container">
        <div className="flex pt-8.25 pl-12.5 items-center pb-4.75">
          <ul className="text-[16px] text-[#000000] flex gap-9 mr-37.75">
            <a href="#">
              <li
                className="transition-all
             duration-300
             ease-out
             hover:text-[#E9672B]
             hover:-translate-y-1"
              >
                Furniture
              </li>
            </a>
            <a href="#">
              <li
                className="transition-all
             duration-300
             ease-out
             hover:text-[#E9672B]
             hover:-translate-y-1"
              >
                Why Feather
              </li>
            </a>
            <a href="#">
              <li
                className="transition-all
             duration-300
             ease-out
             hover:text-[#E9672B]
             hover:-translate-y-1"
              >
                Feather for Business
              </li>
            </a>
          </ul>
          <img src="/svg/logo.svg" alt="logo" />
          <ul className="text-[16px] text-[#000000] flex ml-31">
            <a href="#">
              <li
                className="transition-all
             duration-300
             ease-out
             mr-14
             hover:text-[#E9672B]
             hover:-translate-y-1"
              >
                Check if We Deliver
              </li>
            </a>
            <a href="#">
              <li
                className="transition-all
             duration-300
             ease-out
             mr-8.5
             hover:text-[#E9672B]
             hover:-translate-y-1"
              >
                Search
              </li>
            </a>
            <a href="#">
              <li
                className="transition-all
             duration-300
             ease-out
             mr-10
             hover:text-[#E9672B]
             hover:-translate-y-1"
              >
                Account
              </li>
            </a>
          </ul>
          <img
            className="transition-all
             duration-300
             ease-out
             mr-14
             hover:-translate-y-1
             hover:text-[#E9672B]
             cursor-pointer"
            src="/svg/nav-korsine.svg"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
