import {
  Cloud,
  Code2,
  Globe,
  LineChart,
  Palette,
  Smartphone,
} from "lucide-react";
import React from "react";

function Service() {
  const serviceDetails = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description:
        "We build tailored software solutions that address your unique business challenges. Our experienced team uses the latest technologies and best practices to deliver high-quality, scalable applications.",
      features: [
        "Custom enterprise solutions",
        "Legacy system modernization",
        "API development and integration",
        "Database design and optimization",
      ],
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Create powerful web applications that deliver exceptional user experiences. We specialize in responsive design, progressive web apps, and modern frontend frameworks.",
      features: [
        "Responsive web applications",
        "E-commerce solutions",
        "Content management systems",
        "Progressive Web Apps (PWA)",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Develop engaging mobile applications for iOS and Android platforms. We use cross-platform technologies to ensure efficient development without compromising on quality.",
      features: [
        "Native iOS and Android apps",
        "Cross-platform development",
        "Mobile app optimization",
        "App store deployment",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Leverage the power of cloud computing to scale your business. We provide comprehensive cloud migration, deployment, and management services.",
      features: [
        "Cloud migration strategy",
        "Infrastructure as Code",
        "Serverless architecture",
        "Cloud optimization",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Create intuitive and engaging user experiences that delight your customers. Our design team focuses on user-centered design principles to build interfaces that convert.",
      features: [
        "User interface design",
        "User experience optimization",
        "Design systems",
        "Prototyping and testing",
      ],
    },
    {
      icon: LineChart,
      title: "Digital Transformation",
      description:
        "Transform your business with comprehensive digital solutions. We help organizations embrace digital technologies to improve efficiency and drive growth.",
      features: [
        "Digital strategy consulting",
        "Process automation",
        "Technology roadmap",
        "Change management",
      ],
    },
    {
        icon:Globe,
        title:"Domain Hosting",
        description:"Looking for reliable domain and hosting services to host your website at the top?",
        features:[
            'Free Domain',
            'SSL Certificate',
            '24*7 Support',
            'Low Pricing'
        ],
    }
  ];
  return (
    <div>
      <div className="flex items-center justify-center h-[40vh] bg-gradient-to-r from-black via-red-700 to-black">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Our <span className="text-red-600">Services</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Unlock the potential of your concept, enterprise, aspiration, and
            bring it to
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-black via-black to-black">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
              Comprehensive solutions to drive your business forward
            </p>
          </div>

          <div className="mt-20">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`${index !== 0 ? "mt-16" : ""}`}
                >
                  <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                    <div
                      className={`lg:col-span-5 ${
                        index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="aspect-w-16 aspect-h-9">
                        <div className="flex items-center justify-center h-full bg-orange-50 rounded-lg">
                          <Icon className="h-16 w-16 text-blue-600" />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`mt-6 lg:mt-0 lg:col-span-7 ${
                        index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-gray-200">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-lg text-gray-300">
                        {service.description}
                      </p>
                      <ul className="mt-8 space-y-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <svg
                              className="h-5 w-5 text-orange-700"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="ml-3 text-gray-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
