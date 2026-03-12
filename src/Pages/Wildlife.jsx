import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchWildlifeData } from "../redux/action/action";
import Cards from "../Components/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wildlife = () => {
  const dispatch = useDispatch();
  const WildlifeData = useSelector((state) => state.WildlifeData);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(9);
  const [search, setSearch] = useState("");
  const [filteredSearch, setFilteredSearch] = useState("");


  useEffect(() => {
    dispatch(FetchWildlifeData());
  }, [WildlifeData]);

  // search logic for search data by name
  const filterName = useMemo(() => {
    return WildlifeData.filter((wd) =>
      wd.name.toLowerCase().includes(filteredSearch.toLowerCase()),
    );
  }, [filteredSearch]);

  const handleSearch = () => {
    setFilteredSearch(search);
    setCurrentPage(1);
  };

  //method for displaying 8 cards in md devices and 9 cards in lg devices
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setCardPerPage(9);
    } else if (window.innerWidth >= 768) {
      setCardPerPage(8);
    }
  });

  //pagination logic start here
  const currentCard = useMemo(() => {
    const lastIndex = currentPage * cardPerPage;
    const startIndex = lastIndex - cardPerPage;
    return filterName.slice(startIndex, lastIndex);
  }, [currentPage, cardPerPage, filterName]);

  // total number of pages will display
  const TotalPage = Math.ceil(filterName.length / cardPerPage);

  const selectPageHandle = (selected) => {
    if (selected >= 1 && selected !== currentPage && selected <= TotalPage) {
      setCurrentPage(selected);
    }
  };

  //if data is yet to come then loading text will display
  if (!WildlifeData || WildlifeData.length == 0) {
    return (
      <div className="w-full my-10 text-center">
        <p className="font-body text-lg">
          Loading wildlife data please wait for few sec...
        </p>
      </div>
    );
  }

  return (
    <>
      {/* //search bar and filter button */}
      <div className="mx-10 text-center md: flex md:justify-between md:items-center md:gap-4">
        <button onClick={""} className="flex justify-center items-center gap-2 cursor-pointer">
          <FontAwesomeIcon icon="fa-solid fa-hand-point-left" className="text-2xl text-gray-500"/>
          <span className="font-heading font-semibold text-2xl text-gray-500">Back</span>
        </button>
        
        <div className="relative">
          <input
            type="text"
            value={search}
            placeholder="Search by name"
            className="py-2 px-15 border border-gray-500 rounded-full bg-gray-300 focus:border-gray-600"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="absolute inset-y-0 right-0 px-4 rounded-e-full border border-gray-500 bg-blue-500 text-white font-body font-semibold hover:bg-blue-800 cursor-pointer"
          >
            Search
          </button>
        </div>
        {/* <el-dropdown class="inline-block">
          <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-black inset-ring-1 inset-ring-white/5 hover:bg-gray-400">
            Filter by Status
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="-mr-1 size-5 text-gray-400"
            >
              <path
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          </button>

          <el-menu
            anchor="bottom end"
            popover
            class="w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div class="py-1">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
              >
                Account settings
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
              >
                Support
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
              >
                License
              </a>
              <form action="#" method="POST">
                <button
                  type="submit"
                  class="block w-full px-4 py-2 text-left text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden"
                >
                  Sign out
                </button>
              </form>
            </div>
          </el-menu>
        </el-dropdown> */}
      </div>

      {/* main content sectio  */}
      <div className="w-full h-auto my-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentCard.map((Wdata) => {
          return (
            <Cards key={Wdata.id}>
              {/* background image div */}
              <div
                style={{ backgroundImage: `url('${Wdata.imageUrl}')` }}
                className="absolute w-full h-full bg-cover bg-center rounded-lg"
              >
                {/* overlay div  */}
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
              </div>
              <div className="relative z-10 p-6 space-y-1 group-hover:text-hidden">
                <h1 className="text-white font-heading text-xl">
                  Name :
                  <span className="font-body text-lg ps-5">{Wdata.name}</span>
                </h1>
                <h1 className="text-white font-heading text-xl">
                  Species :
                  <span className="font-body text-lg ps-5">
                    {Wdata.species}
                  </span>
                </h1>
                <h1 className="text-white font-heading text-xl">
                  Habitat :
                  <span className="font-body text-lg ps-5">
                    {Wdata.habitat}
                  </span>
                </h1>
                <h1 className="text-white font-heading text-xl">
                  Diet :
                  <span className="font-body text-lg ps-5">{Wdata.diet}</span>
                </h1>
                <h1 className="text-white font-heading text-xl">
                  Status :
                  <span className="font-body text-lg ps-5">{Wdata.status}</span>
                </h1>
                <h1 className="text-white font-heading text-xl">
                  LifeSpan (years) :
                  <span className="font-body text-lg ps-5">
                    {Wdata.lifespan}
                  </span>
                </h1>
                <h1 className="text-white font-heading text-xl">
                  Weight (in kgs) :
                  <span className="font-body text-lg ps-5">{Wdata.weight}</span>
                </h1>
                <h1 className="text-white font-heading text-xl">
                  Height (in meters) :
                  <span className="font-body text-lg ps-5">{Wdata.height}</span>
                </h1>
                <h1 className="text-white font-heading text-xl">
                  Speed (in kms) :
                  <span className="font-body text-lg ps-5">{Wdata.speed}</span>
                </h1>
              </div>
            </Cards>
          );
        })}
      </div>
      {WildlifeData.length > 0 && (
        <div
          id="pagination"
          className="flex justify-center flex-nowrap text-xs mt-5 space-x-5 font-heading font-semibold mb-10 md:text-xl"
        >
          <span>
            <FontAwesomeIcon
              icon="fa-solid fa-angle-left"
              className={
                currentPage > 1
                  ? "text-gray-400 hover:text-black hover:transform hover:scale-130 hover:duration-300 cursor-pointer"
                  : "opacity-0"
              }
              onClick={() => selectPageHandle(currentPage - 1)}
            />
          </span>
          {[...Array.from({ length: TotalPage })].map((_, i) => {
            return (
              <span
                key={i}
                className={
                  currentPage == i + 1
                    ? "text-black transform translate scale-140 ease-in-out duration-300 cursor-pointer"
                    : "text-gray-400 cursor-pointer"
                }
                onClick={() => selectPageHandle(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span>
            <FontAwesomeIcon
              icon="fa-solid fa-angle-right"
              className={
                currentPage !== TotalPage
                  ? "text-gray-400 hover:text-black hover:transform hover:scale-130 hover:duration-300 cursor-pointer"
                  : "opacity-0"
              }
              onClick={() => selectPageHandle(currentPage + 1)}
            />
          </span>
        </div>
      )}
    </>
  );
};

export default Wildlife;
