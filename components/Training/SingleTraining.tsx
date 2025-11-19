import { Testimonial } from "@/types/testimonial";
import moment from "moment";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTraining = ({ training }: { training: any }) => {
  const {
    certificate_url,
    title,
    provider,
    start_date,
    end_date,
    status,
    description,
  } = training;

  return (
    <div className="w-full">
      <div className="shadow-md dark:shadow-lg rounded-lg bg-white dark:bg-dark p-6 lg:p-5 xl:p-7 transition-all duration-300 hover:shadow-xl dark:hover:shadow-gray-dark">
        <div className="w-full mb-5">
          {/* <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${certificate_url}`} alt={title} fill /> */}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-dark dark:text-white mb-1">
          {title}
        </h3>

        {/* Provider */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          Provided by: <span className="font-medium">{provider}</span>
        </p>

        {/* Description */}
        <p className="text-body-color dark:text-white text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Start Date
            </p>
            <p className="text-sm font-medium text-dark dark:text-white">
              {moment(start_date).format("DD MMMM YYYY")}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">End Date</p>
            <p className="text-sm font-medium text-dark dark:text-white">
              {moment(end_date).format("DD MMMM YYYY")}
            </p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex mt-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              status === 1
                ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-white"
                : "bg-red-100 text-red-700 dark:bg-red-700 dark:text-white"
            }`}
          >
            {status === 1 ? "Active" : "Inactive"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleTraining;
