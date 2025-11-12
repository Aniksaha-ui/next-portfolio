"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  project_name: string;
  description: string;
  website_link: string;
  frontend_tech: string;
  backend_tech: string;
  database: string;
  github_link: string;
  image?: string;
  no_of_developers: number;
  developers_name: string;
  start_date?: string;
  end_date?: string;
  isPublished: boolean;
  published_at?: string;
}

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      project_name: "Travel Booking System",
      description:
        "A full-featured travel booking platform with bus, flight, and hotel management.",
      website_link: "https://travel.example.com",
      frontend_tech: "React, Tailwind CSS",
      backend_tech: "Laravel, Node.js",
      database: "MySQL",
      github_link: "https://github.com/anik/travel-booking",
      image: "/images/projects/travel-booking.png",
      no_of_developers: 3,
      developers_name: "Anik Saha, John Doe, Jane Doe",
      start_date: "2024-01-01",
      end_date: "2024-05-01",
      isPublished: true,
      published_at: "2024-05-05",
    },
    {
      id: 2,
      project_name: "Fintech Dashboard",
      description:
        "An interactive dashboard for financial management, transactions, and reporting.",
      website_link: "https://fintech.example.com",
      frontend_tech: "React, Ant Design",
      backend_tech: "Laravel, Node.js",
      database: "MongoDB",
      github_link: "https://github.com/anik/fintech-dashboard",
      image: "/images/projects/fintech-dashboard.png",
      no_of_developers: 2,
      developers_name: "Anik Saha, John Doe",
      start_date: "2024-06-01",
      end_date: "2024-09-01",
      isPublished: true,
      published_at: "2024-09-05",
    },
  ]);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          My Amazing Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300"
            >
              {project.image && (
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src="https://imgs.search.brave.com/HKge-kAoibDDAH668tPtjGKAAhe0EJyWdiQazOvHaAE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC80My8wNy9p/bmZvZ3JhcGhpYy1k/YXNoYm9hcmQtZmlu/YW5jZS1hcHBsaWNh/dGlvbi1jaGFydHMt/dmVjdG9yLTI3NTM0/MzA3LmpwZw"
                    alt={project.project_name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors duration-300">
                  {project.project_name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                    {project.frontend_tech}
                  </span>
                  <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                    {project.backend_tech}
                  </span>
                  <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">
                    {project.database}
                  </span>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Visit Site
                  </a>
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                  {/* Modal Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full p-6 md:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh] animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-2xl font-bold hover:text-gray-900 dark:hover:text-white"
            >
              &times;
            </button>

            {/* Header */}
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {selectedProject.project_name}
            </h3>

            {/* Image */}
            {selectedProject.image && (
              <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://imgs.search.brave.com/Nz_bzdYEM-FGkDA8a48YLhfmNORjpyN06DFsk8PZAlA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RzLzQwNC9j/NTcwYzcyMzE0Nzg2/OTEuWTNKdmNDd3pP/RE0xTERNd01EQXNP/RFVzTUEucG5n"
                  alt={selectedProject.project_name}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Grid Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Frontend:</span>{" "}
                  {selectedProject.frontend_tech}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Backend:</span>{" "}
                  {selectedProject.backend_tech}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Database:</span>{" "}
                  {selectedProject.database}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Developers:</span>{" "}
                  {selectedProject.developers_name} (
                  {selectedProject.no_of_developers})
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Duration:</span>{" "}
                  {selectedProject.start_date} - {selectedProject.end_date}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Published:</span>{" "}
                  {selectedProject.isPublished
                    ? selectedProject.published_at
                    : "Not Published"}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {selectedProject.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href={selectedProject.website_link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Visit Site
              </a>
              <a
                href={selectedProject.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm font-medium bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
