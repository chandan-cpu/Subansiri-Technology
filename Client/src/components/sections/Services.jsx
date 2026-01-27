import FadeIn from "../common/FadeIn";
import { ChevronRight } from "lucide-react";

const Services = () => {
  const services = [
    { title: 'Web Development', desc: 'Professional web development services to build responsive and engaging websites.', icon: '🌐', color: 'bg-blue-50 text-blue-600' },
    { title: 'Software Development', desc: 'Custom software solutions tailored to your business needs.', icon: '💻', color: 'bg-purple-50 text-purple-600' },
    { title: 'Web and Software Maintenance', desc: 'Ensuring your digital assets remain up-to-date, secure, and performing optimally.', icon: '🛠️', color: 'bg-emerald-50 text-emerald-600' },
    { title: 'Digital Marketing', desc: 'Amplify your brand presence and engage your audience with targeted digital marketing strategies.', icon: '📢', color: 'bg-red-50 text-red-600' },
    { title: 'App Development', desc: 'Creating intuitive and powerful mobile applications for iOS and Android platforms.', icon: '📱', color: 'bg-orange-50 text-orange-600' },
    { title: 'Digital Consulting', desc: 'Strategic roadmaps to modernize legacy systems and processes.', icon: '📋', color: 'bg-indigo-50 text-indigo-600' }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
            <div className="text-center mb-20">
            <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase mb-2">What We Do</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Tech Solutions</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We combine technical expertise with business acumen to deliver software that drives real growth.
            </p>
            </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="group h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <a href="#" className="inline-flex items-center text-gray-500 font-semibold hover:text-blue-700">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Services;
