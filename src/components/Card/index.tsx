import { Link } from "react-router-dom";

interface ICard {
  id?: number;
  img?: string;
  category?: string;
  date?: string;
  title?: string;
  body?: string;
}

const Card = ({ id, body, category, date, img, title }: ICard) => {
  return (
    <Link to={`/post/${id}`} className="flex flex-col bg-secondary">
      <img className="aspect-[4/3] object-cover" src={img} alt={title} />
      <div className="p-4 space-y-2">
        <span className="text-xs lg:text-sm">{`${category} - ${date}`}</span>
        <h6 className="capitalize font-semibold">{title}</h6>
        <p>{body}</p>
      </div>
    </Link>
  );
};

export default Card;
