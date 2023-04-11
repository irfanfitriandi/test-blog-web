import { FunctionComponent, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

import Layout from "components/Layout";
import Loading from "components/Loading";
import CarouselCategories from "./CarouselCategories";
import SidebarCategories from "./SidebarCategories";
import Instagram from "./Instagram";
import TopPost from "./TopPost";
import CardPost from "./CardPost";
import { BsSearch } from "react-icons/bs";

import PostTypes from "shared/types/post";
import { POST_DATA } from "shared/constants/post";
import { CATEGORIES } from "shared/constants/categories";

const Home = () => {
  const [search, setSearch] = useState("");
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

  const filteredData = newData?.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CarouselCategories data={CATEGORIES} />
          <section className="flex flex-col lg:flex-row gap-4 lg:mx-10">
            {/* Left Content */}
            <aside className="flex flex-col basis-1/4 space-y-8">
              {/* Search Box */}
              <div className="flex justify-between items-center bg-secondary py-2 px-3">
                <input
                  type="text"
                  placeholder="Search. . . "
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  className="outline-none bg-secondary px-1 w-full"
                />
                <BsSearch />
              </div>

              {/* Categories Menu */}
              <div>
                <h3 className="font-bold text-xl lg:text-xl mb-4">
                  Categories
                </h3>
                <SidebarCategories data={CATEGORIES} />
              </div>

              {/* Top Post */}
              <div className="bg-secondary p-4">
                <h3 className="font-bold text-xl lg:text-xl">Top Post</h3>
                <TopPost data={newData?.slice(0, 5)} />
              </div>

              {/* Instagram */}
              <div>
                <h3 className="font-bold text-xl lg:text-xl">Instagram</h3>
                <Instagram />
              </div>
            </aside>

            {/* Right Content */}
            <section className="basis-3/4 space-y-4 flex flex-col items-center">
              {filteredData?.length === 0 ? (
                <div className="text-xl m-10">No data</div>
              ) : (
                <CardPost data={filteredData} />
              )}
              <button
                type="button"
                className="bg-accent text-white font-medium w-36 h-10"
              >
                Load More
              </button>
            </section>
          </section>
        </>
      )}
    </Layout>
  );
};

export default Home as FunctionComponent;
