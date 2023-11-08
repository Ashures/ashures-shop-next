const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => { return (
        <div key={item.id} className="flex justify-center items-center rounded-md bg-gray-800 shadow-sm w-full h-full text-4xl font-semibold">{item.name}</div>
      )})}
    </>
  );
};

export default ItemList;