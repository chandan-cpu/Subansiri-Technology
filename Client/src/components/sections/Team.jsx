import FadeIn from "../common/FadeIn";
import img1 from '../../assets/Chandan.jpeg'
import img2 from '../../assets/swapnil.jpeg'
import img3 from '../../assets/dipak.jpeg'
import img4 from '../../assets/bhaskar.jpeg'
import img5 from '../../assets/Kunal.jpeg'
import img6 from '../../assets/hari.jpeg'



const Team = () => {
    const team = [
      { name: 'Chandan Boruah', role: 'Founder/Co-Founder/Software Engineer', image: img1 },
      { name: 'Dipak Dutta', role: 'CEO,CIO', image: img3},
      { name: 'Swapnil Srivastava', role: 'CTO/Software Engineer', image: img2 },
      { name: 'Bhaskar jyoti Sonowal', role: 'MD', image: img4 },
       { name: 'Kunal Rastogi', role: 'Software Engineer', image: img5 },
      { name: 'Hari Om Singh', role: 'Software Engineer', image: img6 },

    ];
  
    return (
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">The minds behind the technology.</p>
            </div>
          </FadeIn>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="group text-center">
                    <div className="relative mb-4 inline-block">
                        <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 transform scale-105"></div>
                        <img
                        src={member.image}
                        alt={member.name}
                        className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-white shadow-lg group-hover:shadow-xl transition-all duration-300 grayscale group-hover:grayscale-0"
                        />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    );
};


export default Team;
