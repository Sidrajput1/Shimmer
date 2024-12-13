import React from 'react'
import { ArrowRight } from 'lucide-react';

function CaseStudy() {

    const caseStudies = [
        {
          title: 'Digital Transformation Success',
          client: 'Global Retail Corp',
          metrics: [
            { label: 'Revenue Increase', value: '150%' },
            { label: 'Customer Satisfaction', value: '95%' },
            { label: 'Processing Time', value: '-60%' }
          ],
          description: 'How we helped a traditional retailer transform their business with a modern digital platform.',
          image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
      ];
      
  return (
    <div>
        <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Case Studies
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Deep dives into our most impactful projects
          </p>
        </div>

        <div className="mt-20">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="lg:grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="text-sm font-medium text-indigo-600">
                    {study.client}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900">
                    {study.title}
                  </h3>
                  <p className="mt-4 text-lg text-gray-500">
                    {study.description}
                  </p>
                  
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl font-bold text-indigo-600">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-500">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href="#"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default CaseStudy