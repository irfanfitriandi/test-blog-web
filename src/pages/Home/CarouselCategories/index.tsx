import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ICarousel {
  data: {
    img: string;
    label: string;
  }[];
}

const CarouselCategories = ({ data }: ICarousel) => {
  return (
    <Carousel
      infiniteLoop={true}
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      showStatus={false}
      stopOnHover={true}
      swipeable={true}
      className="-mx-4 py-5"
    >
      {data.map((data, idx) => (
        <div
          style={{
            backgroundImage: `linear-gradient(
                  rgba(0, 0, 0, 0.35),
                  rgba(0, 0, 0, 0.35)
                ), url(${data.img})`,
            backgroundSize: `cover`,
          }}
          className="h-96 flex flex-col justify-center items-center text-white space-y-4"
          key={idx}
        >
          <span className="font-semibold antialiased text-2xl lg:text-4xl">
            {data.label}
          </span>
          <p className="text-xs lg:text-base max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            enim quas doloribus atque facilis minima dolorum, porro eos adipisci
            eius.
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCategories;
