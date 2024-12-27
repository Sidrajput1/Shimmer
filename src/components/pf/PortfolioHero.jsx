import React from "react";
import { ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet";
import s3 from '../../assets/images/s3.png';
import umpire from '../../assets/images/umpire.png';

function PortfolioHero() {
  // const projects = [
  //   {
  //     title: "School Erp Software",
  //     category: "Web Development",
  //     description:
  //       "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and AI-powered recommendations.",
  //     image:
  //       "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //     link: "#",
  //   },
  //   {
  //     title: "Healthcare App",
  //     category: "Mobile and Web Development",
  //     description:
  //       "A comprehensive healthcare management app that helps patients track medications, appointments, and communicate with healthcare providers.",
  //     image:
  //       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //     link: "#",
  //   },
  //   {
  //     title: "Financial Dashboard",
  //     category: "Custom Software",
  //     description:
  //       "A real-time financial analytics dashboard providing insights and predictive analysis for investment decisions.",
  //     image:
  //       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //     link: "#",
  //   },
  //   {
  //     title: "Smart City Platform",
  //     category: "IoT Solutions",
  //     description:
  //       "An IoT platform that helps cities monitor and manage infrastructure, traffic, and environmental conditions in real-time.",
  //     image:
  //       "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //     link: "#",
  //   },
  // ];

  const projects = [
    {
      title: "ERP Software",
      category: "Web Development",
      description:
        "Modern ERP solutions are often cloud-based, scalable, and equipped with advanced analytics, ensuring adaptability to the evolving needs of businesses across industries.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Healthcare App",
      category: "Mobile and Web Development",
      description:
        "A comprehensive healthcare management app that helps patients track medications, appointments, and communicate with healthcare providers.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Financial Dashboard",
      category: "Custom Software",
      description:
        "A real-time financial analytics dashboard providing insights and predictive analysis for investment decisions.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
   
    {
      title: "School Website with CMS",
      category: "Web Development",
      description:
        "A dynamic school website built with a content management system, allowing easy updates to events, announcements, and academic content.",
      image:
        "https://i.pinimg.com/736x/45/b5/55/45b555d37a26df1c3d652ff62832c886.jpg",
      link: "#",
    },
    {
      title: "NGO Website with Admin Panel",
      category: "Web Development",
      description:
        "A fully functional website for NGOs featuring an admin panel for managing donations, volunteer sign-ups, and event tracking.",
      image:
        s3,
      link: "#",
    },
    {
      title: "Grocery Business Website",
      category: "eCommerce Development",
      description:
        "A responsive eCommerce website tailored for grocery businesses, featuring product catalogs, online ordering, and delivery management.",
      image:
        "https://i.pinimg.com/736x/0b/57/93/0b5793a8773dc0dac0b0ad84838a5540.jpg",
      link: "#",
    },
    {
      title: "Small Business Website",
      category: "Web Development",
      description:
        "Custom websites for small businesses, designed for branding, lead generation, and showcasing products or services.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Restaurant Management Platform",
      category: "Web and Mobile Development",
      description:
        "A platform for restaurants offering features like online reservations, digital menus, and order tracking for dine-in or delivery.",
      image:
        "https://i.pinimg.com/736x/e5/e5/4e/e5e54e7f4e852a95da90e76d7794f220.jpg",
      link: "#",
    },
  ];
  
  return (
    <div>
        <Helmet>
        <title>portfolio - Shimmer Softech</title>
        <meta
          name="description"
          content="Welcome to Shimmer Softech, At Shimmer Softech, we turn your digital dreams into reality. Our expert team specializes in creating stunning websites, robust web applications, and innovative mobile apps tailored to your unique needs"
        />
        <meta
          name="keywords"
          content="Website,App,Development,Domain,Ui,Ux,Design,Software"
        />
        <meta property="og:title" content="About Us - Shimmer Softech " />
        <meta
          property="og:description"
          content="Discover more about us and mission behind Our Company."
        />
        <meta property="og:type" content="shimmersoftech" />
        <meta property="og:url" content="https://shimmersoftech.com/about" />

        <meta property="og:url" content="" />
        <meta property="og:url" content="" />
      </Helmet>
      <section className="relative py-32 bg-gradient-to-r from-black  to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-50 sm:text-5xl md:text-6xl">
              latest Work
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Discover how we've helped businesses transform their digital
              presence and achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium text-indigo-600">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <a
                      href={project.link}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                    >
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioHero;
