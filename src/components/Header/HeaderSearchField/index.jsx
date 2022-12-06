import React from "react";
import { FaSearch } from "react-icons/fa/index.js";
import { observer } from "mobx-react-lite";
import searchQuery from "../../../store/search-query";

const HeaderSearchField = observer(() => {
  return (
    <div className="flex flex-row justify-center items-center p-1 bg-white cursor-pointer">
      <input
        type="text"
        placeholder="Поиск"
        onChange={(e) => searchQuery.search(e.target.value)}
        className="text-sm text-black outline-0 border-none"
      />

      <a href="/search">
        <FaSearch
          onClick={(e) => {
            searchQuery.fetchPosts(searchQuery.query);
          }}
          className="z-10 text-black"
        />
      </a>
    </div>
  );
});

export default HeaderSearchField;
