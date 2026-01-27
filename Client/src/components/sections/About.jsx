import FadeIn from "../common/FadeIn";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-10"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="relative rounded-2xl shadow-lg w-full object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-xl hidden lg:block">
                 <div className="text-4xl font-bold text-blue-600 mb-1">1+ Years</div>
                 <div className="text-gray-600 font-medium">Of Innovation Excellence</div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Built on Trust, <br/>Driven by Innovation</h2>
            <div className="space-y-6 text-lg text-gray-600">
                <p>
                Founded in 2025, Subansiri Technologies has evolved from a boutique coding shop to a global digital transformation partner. We don't just write code; we architect the future of your business.
                </p>
                <p>
                Our philosophy is simple: complex problems require elegant solutions. We maintain a client-retention rate of 98% because we treat every project as if it were our own.
                </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-10">
                <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">5+</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Projects Shipped</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">4+</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Expert Engineers</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">2+</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">State Served</div>
                </div>
                <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Support Available</div>
                </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
export default About;
