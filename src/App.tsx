import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import LetfSide from './components/Left/LeftSide';
import RightSide, { PostType } from './components/Right/RightSide';
import axios from 'axios';
import { IUsers } from './types/types';

function App() {
  const [data, setData] = useState<IUsers[]>([]);
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<number | null>(null);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [orders, setOrder] = useState(['A-Z', 'Z-A']);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get<IUsers[]>(`https://jsonplaceholder.typicode.com/users`);
      setData(res.data);
    } catch (error) {
      window.alert(error);
    }
  };

  const fetchPosts = async (id: number) => {
    try {
      setIsLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
      setPosts(res.data);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const moreInfo = (id: number) => {
    setOpen(true);
    setId(id);
    fetchPosts(id);
  };

  const sortName = (event: React.MouseEvent<HTMLElement>) => {
    if (activeIdx === 0) {
      const sorted = [...data].sort((personA: IUsers, personB: IUsers) =>
        personB.name < personA.name ? 1 : -1,
      );
      setData(sorted);
    } else if (activeIdx === 1) {
      const sorted = [...data].sort((personA: IUsers, personB: IUsers) =>
        personB.name > personA.name ? 1 : -1,
      );
      setData(sorted);
    }
    setOpen(false);
  };

  return (
    <div className="w-[100%]  bg-slate-900 text-white h-full">
      <div className="w-[1200px] py-2 px-4 m-auto ">
        <Header
          search={value}
          setSearch={setValue}
          sorted={sortName}
          orders={orders}
          setActiveIdx={setActiveIdx}
        />
        <div className="flex justify-between">
          <LetfSide users={data} value={value} moreInfo={moreInfo} />
          {open && <RightSide setOpen={setOpen} posts={posts} loading={isLoading} />}
        </div>
      </div>
    </div>
  );
}

export default App;
