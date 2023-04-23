import { FunctionComponent } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import NotFound from "components/NotFound";
import Layout from "components/Layout";
import Loading from "components/Loading";

import { POST_DATA } from "shared/constants/post";
import PostTypes from "shared/types/post";
import { useTitle } from "shared/hooks/useTitle";
import { Helmet } from "react-helmet";

const Detail = () => {
  const { id }: any = useParams();

  const getPost = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  };

  const { data, error, isError, isLoading } = useQuery<PostTypes[], Error>({
    queryKey: ["GetPost"],
    queryFn: getPost,
  });
  if (isError) {
    return alert(`Error fetching data: ${error.message}`);
  }

  const newData = data?.slice(4, 10).map((u, id) => {
    const match = POST_DATA.find((_, idx) => idx === id);
    return {
      ...u,
      date: match?.date,
      category: match?.category,
      img: match?.img,
    };
  });
  const isAvailable = newData?.some((data) => data.id === +id);
  const detailPost = newData?.find((data) => data.id === +id);

  // useTitle(`${detailPost?.title}`);

  return (
    <Layout>
      <Helmet>
        <meta name="description" content={detailPost?.body} />
        <meta name="keywords" content="News, Blog news, Culture" />
        <meta name="author" content="Irfan Fitriandi" />
        <link rel="canonical" href="https://cfbv.vercel.app/" />
        <title>{detailPost?.title.toUpperCase()}</title>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cfbv.vercel.app/" />
        <meta property="og:title" content={detailPost?.title} />
        <meta property="og:description" content={detailPost?.body} />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/119382082/233851968-99bbd2ba-368e-4841-9501-80b4aaaaca54.png"
        />
      </Helmet>
      {!isAvailable ? (
        <NotFound />
      ) : isLoading ? (
        <Loading />
      ) : (
        <div className="-mx-4 mb-20">
          <img
            src={detailPost?.img}
            alt={detailPost?.title}
            className="w-full h-96 object-cover"
          />
          <article className="my-5 mx-4 lg:mx-10 space-y-4">
            <h3 className="capitalize font-semibold text-xl lg:text-3xl">
              {detailPost?.title}
            </h3>
            <span className="text-xs lg:text-sm">{`${detailPost?.category} - ${detailPost?.date}`}</span>
            <p className="text-justify">
              {detailPost?.body} Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Consequuntur, repudiandae adipisci architecto
              ipsam, iusto hic corporis totam ut, sunt necessitatibus et
              molestias non dolorum harum! Eveniet atque, quam laboriosam aut
              dolorem quos magni ab dignissimos vel in dolor iste ducimus
              provident sapiente? Ipsa magnam iusto animi unde necessitatibus,
              quasi modi?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              distinctio reprehenderit, ipsam quae, aliquam non minus iusto,
              optio nam voluptate unde. Hic itaque animi eos dicta consequuntur
              alias odit nostrum maiores veritatis. Cupiditate, repudiandae?
              Omnis laudantium quos nobis quidem porro eum corrupti, similique
              enim beatae eius quae in, blanditiis, provident perspiciatis vitae
              iusto nisi cupiditate doloremque voluptate. Exercitationem
              necessitatibus placeat, minima quibusdam ex recusandae cupiditate
              aut aspernatur quos nulla, non voluptas nisi. Natus magnam itaque
              omnis at iste voluptates delectus enim, accusamus perferendis?
              Amet, eveniet at, earum architecto debitis temporibus aliquid
              itaque modi repudiandae quae iusto nostrum ducimus inventore
              commodi.
            </p>
          </article>
        </div>
      )}
    </Layout>
  );
};

export default Detail as FunctionComponent;
