const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => { return (
        <div key={item.id} className="flex justify-center items-center bg-white shadow-sm w-full h-full text-black text-4xl font-semibold">{item.name}</div>
      )})}
    </>
  );
};

export default ItemList;