interface SearchProps {
  search: string;
  setSearch: (str: string) => void;
  sorted: Function;
  orders: string[];
  setActiveIdx: Function;
}

function Header({ search, setSearch, sorted, orders, setActiveIdx }: SearchProps) {
  return (
    <header className="flex justify-between items-center mb-[35px]">
      <div>
        <span className="text-[20px] font-bold">Logo</span>
      </div>

      <div className="flex justify-between items-center">
        <div className="mr-7">
          <div className="flex justify-between">
            Sort by:{' '}
            {orders.map((o, i) => (
              <p onClick={() => setActiveIdx(i)} className="px-1 hover:cursor-pointer" key={i}>
                {o}
              </p>
            ))}
          </div>
        </div>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          className="w-[248px] h-[50px] bg-[#333348] rounded-[40px] outline-0 px-3 text-[20px] text-white"
          placeholder="Search..."
        />
      </div>
    </header>
  );
}

export default Header;
