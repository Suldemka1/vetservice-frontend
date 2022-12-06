// import Time from "../../classes/Time/Time"

const DocumentCard = (params) => (
  <div className="flex flex-col gap-1 border rounded text-md w-100">
    <div className="bg-blue-900 dark:bg-gray-400 p-3 rounded-t text-white dark:text-black">
      <h5>{params.name}</h5>
    </div>

    <div className="p-3">
      <div className="flex flex-row flex-wrap gap-5">
        {params.types.map((item) => {
          return (
            <button key={item.id} className="w-fit button dark:bg-gray-500">
              {item?.title}
            </button>
          );
        })}
      </div>
    </div>

    <div className="flex xs:flex-col md:flex-row justify-between xs:items-start md:items-center gap-3 p-3">
      {/* <div className="">Дата подписания {Time.signingDateConverter(params.date)}</div> */}

      <a
        href={`${import.meta.env.PUBLIC_URL}${params?.url}`}
        className="button dark:bg-gray-500"
      >
        Скачать
      </a>
    </div>
  </div>
);

export default DocumentCard