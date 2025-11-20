"use client";

import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import { RESEARCH, RESEARCH_DETAILS } from "@/helpers/constants/pageConst";
import SinglePublication from "./SinglePublication";

interface Publication {
  id: number;
  title: string;
  abstract: string;
  publication_date: string;
  publisher: string;
  authors: string;
  doi: string;
  pdf_url: string;
  url: string;
  status: number;
}

const Publications = () => {
  const [publicationData, setPublicationData] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users/publication`
        );
        const data = await response.json();

        if (data && data.isExecuted) {
          setPublicationData(data.data.data);
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  if (loading)
    return (
      <p className="text-center py-16 text-lg font-medium text-gray-600 dark:text-gray-300">
        Loading publications...
      </p>
    );

  if (error)
    return (
      <p className="text-center py-16 text-lg font-medium text-red-500">
        {error}
      </p>
    );

  return (
    <section className="relative z-10 py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-500">
      {/* Background decorative gradients */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-purple-300 via-indigo-300 to-indigo-500 dark:from-purple-700 dark:via-indigo-700 dark:to-indigo-900 rounded-full opacity-20 animate-pulse-slow pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-pink-300 via-red-300 to-orange-400 dark:from-pink-700 dark:via-red-600 dark:to-orange-700 rounded-full opacity-15 animate-pulse-slow pointer-events-none"></div>

      <div className="container relative z-10">
        <SectionTitle title={RESEARCH} paragraph={RESEARCH_DETAILS} center />

        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {publicationData &&
            publicationData.map((pub: Publication) => (
              <SinglePublication key={pub.id} {...pub} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
