import { Link } from "react-router-dom";

interface ITopPost {
  data?: {
    id?: number;
    title?: string;
    category?: string;
    date?: string;
  }[];
}

const TopPost = ({ data }: ITopPost) => {
  return (
    <>
      {data?.map((data, idx) => (
        <Link to={`/post/${data.id}`} key={idx} className="flex pt-2">
          <span className="text-2xl font-bold basis-1/12">{idx + 1}</span>
          <div className="flex flex-col basis-10/12">
            <h6 className="capitalize font-semibold">{data.title}</h6>
            <span className="text-xs lg:text-sm">{`${data.category} - ${data.date}`}</span>
          </div>
        </Link>
      ))}
    </>
  );
};

export default TopPost;
