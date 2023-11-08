"use client";

import ItemList from "@/components/marketplace/ItemList";
import { useState } from "react";

const Marketplace = () => {
  const [items, setItems] =  useState(() => {
    const itemList = [];
    for (let i = 1; i < 25; i++) {
      itemList.push({ id: crypto.randomUUID(), name: i});
    }
    return itemList;
  });
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (dir) => {
    if (currentPage + dir < 1 || (currentPage + dir) * 8 > items.length) return;

    setCurrentPage(current => { return current + dir });
  };

  const getItems = () => {
    const page = items.slice((currentPage - 1) * 8, currentPage * 8);

    return page;
  }

  return (
    <div id="marketplace" className="grid grid-cols-6 grid-rows-2 gap-1.5 w-full h-full">
        <div id="marketplace-left" className="row-start-1 row-end-4 flex justify-center items-center">
          <button className="h-fit" onClick={() => changePage(-1)}>
            <i className="fa-solid fa-arrow-left p-2 h-12 w-12 rounded-full border border-gray-500 hover:border-white text-3xl"></i>
          </button>
        </div>
        {/*  */}
        <ItemList items={getItems()} />
        {/*  */}
        <div id="marketplace-right" className="row-start-1 row-end-4 col-start-6 flex justify-center items-center">
          <button className="h-fit" onClick={() => changePage(1)}>
            <i className="fa-solid fa-arrow-right p-2 h-12 w-12 rounded-full border border-gray-500 hover:border-white text-3xl"></i>
          </button>
        </div>
      </div>
  );
};

export default Marketplace;