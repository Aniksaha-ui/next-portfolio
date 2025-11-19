"use client";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { useState, useEffect } from "react";
import { UserSpace, UserSpaceOnUse } from "@/helpers/icons/icon";
import {
  TESTIMONIAL,
  TESTIMONIAL_DETAILS,
} from "@/helpers/constants/pageConst";

const Testimonials = () => {
  const [testimonialData, settestimonial] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from API
  useEffect(() => {
    const fetchPublication = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users/testimonial`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (data && data.isExecuted === true) {
          settestimonial(data.data.data);
        }
      } catch (error) {
        setError(error?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPublication();
  }, []);

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title={TESTIMONIAL}
          paragraph={TESTIMONIAL_DETAILS}
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial: Testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        <UserSpace />
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <UserSpaceOnUse />
      </div>
    </section>
  );
};

export default Testimonials;
