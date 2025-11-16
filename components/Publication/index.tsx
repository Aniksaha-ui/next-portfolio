"use client";

import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import { RESEARCH, RESEARCH_DETAILS } from "@/helpers/constants/pageConst";

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
        <SectionTitle
          title={RESEARCH}
          paragraph={RESEARCH_DETAILS}
          center
        />

        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {publicationData.map((pub: Publication) => (
            <div
              key={pub.id}
              className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-500 overflow-hidden"
            >
              {/* Gradient overlays */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-400 via-purple-400 to-indigo-500 dark:from-indigo-600 dark:via-purple-600 dark:to-indigo-800 opacity-30 blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-12 -left-12 w-24 h-24 rounded-full bg-gradient-to-tr from-pink-400 via-red-400 to-orange-400 dark:from-pink-600 dark:via-red-500 dark:to-orange-600 opacity-20 blur-xl pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {pub.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {pub.abstract}
              </p>

              <div className="text-sm space-y-1 mb-4 text-gray-600 dark:text-gray-400">
                <p>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Authors:
                  </span>{" "}
                  {pub.authors}
                </p>
                <p>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Publisher:
                  </span>{" "}
                  {pub.publisher}
                </p>
                <p>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Date:
                  </span>{" "}
                  {pub.publication_date}
                </p>
                <p>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    DOI:
                  </span>{" "}
                  {pub.doi}
                </p>
              </div>

              <div className="flex gap-4">
                {pub.pdf_url && (
                  <a
                    href={pub.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:scale-105 transition transform shadow-md"
                  >
                    PDF
                  </a>
                )}
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold hover:scale-105 transition transform shadow-md"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
