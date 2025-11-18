import { Testimonial } from "@/types/testimonial";
import moment from "moment";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleExperience = ({ singleExperience }: { singleExperience: any }) => {
  const { job_title, company, start_date, end_date, location, description,is_current } = singleExperience;




  return (
   <div className="w-full">
  <div
    className="wow fadeInUp shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-lg bg-white p-6 md:p-8 duration-300 hover:shadow-one dark:bg-dark"
    data-wow-delay=".1s"
  >
    {/* Top Section: Job Title + Company */}
    <div className="mb-4">
      <h3 className="text-xl font-semibold text-dark dark:text-white leading-snug">
        {job_title}
      </h3>
      <p className="text-body-color text-sm mt-1 dark:text-white/70">
        {company}
      </p>
    </div>


     <p className="text-sm text-body-color dark:text-white/70">
        <span className="font-medium text-dark dark:text-white">
          Duration:
        </span>
        {moment(start_date).format("MMM YYYY")} – {is_current ===  1 ? "Continue" : moment(end_date).format("MMM YYYY")    }
      </p>

    {/* Middle Section: Dates + Location */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
     

      <p className="text-sm text-body-color dark:text-white/70 mt-2 sm:mt-0">
        <span className="font-medium text-dark dark:text-white">
          Location:
        </span>{" "}
        {location}
      </p>
    </div>

    {/* Description */}
    {/* <p className="text-base leading-relaxed text-body-color dark:text-white border-t border-body-color/20 dark:border-white/20 pt-4">
      {description}
    </p> */}
  </div>
</div>
  );
};

export default SingleExperience;
