import React from "react";

const PostCard = (params) => {
  if (!params) {
    return <h3>Empty post</h3>;
  } else {
    return (
      <div
        className="flex xs:flex-col md:flex-row border-2 rounded-r"
        key={params.id}
      >
        <div className="block sm:min-w-[calc(200px)] md:min-w-[calc(350px)]">
          <img
            alt="some"
            src={params.preview_image}
            width="300px"
            height="200px"
            className="dark:grayscale"
          />
        </div>

        <div className="flex flex-col justify-between gap-3 p-3">
          <div className="text-xl">
            <h1>{params.title}</h1>
          </div>
          <div>
            <p className="text-md">{params.news_preview}</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex xs:flex-col md:flex-row items-center gap-2">
              <p className="font-bold">Дата публикации:</p>
              {/* {unixTimeConverter(params.createdAt)} */}
            </div>

            <a href={`/news/post-${params.id}`} className="button dark:bg-gray-500">
              Читать
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default PostCard;
