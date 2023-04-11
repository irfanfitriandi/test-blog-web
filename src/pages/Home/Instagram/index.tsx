import { dummy } from "./constant";

const Instagram = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {dummy.map((data, idx) => (
        <div key={idx}>
          <img
            className="aspect-square object-cover"
            src={data.img}
            alt={`instagram-${idx + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Instagram;
