"use client";

import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import moment from "moment";
import {
  BackgroundShape,
  Calender,
  RoundedShape,
  ViewIcon,
} from "@/helpers/icons/icon";

interface BlogDetails {
  id: number;
  title: string;
  content: string;
  short_description?: string;
  fa_icon?: string;
  view_count?: string;
  author_name?: string;
  category?: string;
  image?: string;
  isPublishedauthor?: string;
  published_date?: string;
}

const BlogDetailsPage = () => {
  const [blogDetails, setBlogDetails] = useState<BlogDetails | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Use useParams() instead of router.query
  const { id } = useParams();

  useEffect(() => {
    if (!id) return; // Wait until id is available

    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users/blogs/${id}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }

        const data = await response.json();
        console.log(data.data);

        if (data && data.isExecuted == true) {
          setBlogDetails(data.data);
        }
        const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}/${blogDetails?.image}`;

        // setBlogs(data.data.data); // Uncomment once you know the structure
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [id]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-20">{error}</p>;

  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        {/* your blog details JSX (same as before) */}
        <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight"></h2>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {blogDetails?.title}
              </h2>
              <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <div className="flex flex-wrap items-center">
                  <div className="mb-5 mr-10 flex items-center">
                    <div className="mr-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        {blogDetails?.image && (
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${blogDetails?.image}`}
                            alt="author"
                            fill
                          />
                        )}
                      </div>
                    </div>
                    <div className="w-full">
                      <span className="mb-1 text-base font-medium text-body-color">
                        By <span>{blogDetails?.author_name}</span>
                      </span>
                    </div>
                  </div>
                  <div className="mb-5 flex items-center">
                    <p className="mr-5 flex items-center text-base font-medium text-body-color">
                      <span className="mr-3">
                        <Calender />
                      </span>
                      {moment(blogDetails?.published_date).format(
                        "DD MMMM YYYY"
                      )}
                    </p>
                    <p className="flex items-center text-base font-medium text-body-color">
                      <span className="mr-3">
                        <ViewIcon />
                      </span>
                      {blogDetails?.view_count}
                    </p>
                  </div>
                </div>
                <div className="mb-5">
                  <a
                    href="#0"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
                  >
                    {blogDetails?.category}
                  </a>
                </div>
              </div>
              <div>
                <p
                  className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: blogDetails?.short_description,
                  }}
                />

                <div className="mb-10 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${blogDetails?.image}`}
                      alt="image"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <p
                  className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: blogDetails?.content || "",
                  }}
                />

                <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                  <p
                    className="text-center text-base font-medium italic text-body-color"
                    dangerouslySetInnerHTML={{
                      __html: blogDetails?.short_description || "",
                    }}
                  ></p>
                  <span className="absolute left-0 top-0 z-[-1]">
                    <BackgroundShape />
                  </span>
                  <span className="absolute bottom-0 right-0 z-[-1]">
                    <RoundedShape />
                  </span>
                </div>

                <div className="items-center justify-between sm:flex">
                  <div className="mb-5">
                    <h4 className="mb-3 text-sm font-medium text-body-color">
                      Popular Tags :
                    </h4>
                    <div className="flex items-center">
                      <TagButton text="Design" />
                      <TagButton text="Development" /> <TagButton text="Info" />
                      <TagButton text="Programming" />
                    </div>
                  </div>
                  <div className="mb-5">
                    <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                      Share this post :
                    </h5>
                    <div className="flex items-center sm:justify-end">
                      <SharePost />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
