import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-slate-200 shadow-md px-2 sm:px-0">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="cursor-pointer font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Real</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="w-40 md:w-64 xl:w-1/2 bg-slate-100 p-2 rounded-lg flex justify-between items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-500" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/profile">
            {currentUser ? (
              <div className="flex justify-center items-center gap-2">
                <img
                  className="rounded-full h-10 w-10 object-cover"
                  src={currentUser.avater}
                  alt="profile"
                />
                <span>Profile</span>
              </div>
            ) : (
              <li className="inline text-slate-700 hover:underline cursor-pointer">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
