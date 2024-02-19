import * as React from 'react';
import PostsInfo from '../PostsInfo';

export type PostType = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

type PropsType = {
  posts: PostType[];
  setOpen: Function;
  loading: boolean;
};

const RightSide: React.FC<PropsType> = ({ posts, setOpen, loading }) => {
  return (
    <div className="relative w-[800px] bg-[#333348] px-8 rounded-3xl max-h-[1100px] overflow-y-auto">
      <span
        className="absolute top-[15px] right-[15px] hover:cursor-pointer"
        onClick={() => {
          setOpen(false);
        }}>
        <b>x</b>
      </span>

      {loading ? <p>loading</p> : posts.map((p) => <PostsInfo key={p.id} post={p} />)}
    </div>
  );
};

export default RightSide;
