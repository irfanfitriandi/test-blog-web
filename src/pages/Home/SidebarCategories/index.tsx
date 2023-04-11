interface ISidebar {
  data: {
    img: string;
    label: string;
  }[];
}

const SidebarCategories = ({ data }: ISidebar) => {
  return (
    <>
      {data.map((data, idx) => (
        <nav
          style={{
            backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.35),
          rgba(0, 0, 0, 0.35)
        ), url(${data.img})`,
            backgroundSize: `cover`,
          }}
          className="flex flex-col justify-center items-center text-white my-2 h-20"
          key={idx}
        >
          <span className="font-bold lg:text-xl">{data.label}</span>
        </nav>
      ))}
    </>
  );
};

export default SidebarCategories;
