import Card from "components/Card";

interface ICardPost {
  data?: {
    id?: number;
    img?: string;
    category?: string;
    date?: string;
    title?: string;
    body?: string;
  }[];
}

const CardPost = ({ data }: ICardPost) => {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {data?.map((data, idx) => (
        <Card
          key={idx}
          id={data.id}
          body={data.body}
          category={data.category}
          date={data.date}
          img={data.img}
          title={data.title}
        />
      ))}
    </div>
  );
};

export default CardPost;
