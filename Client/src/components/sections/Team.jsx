import FadeIn from "../common/FadeIn";
import img1 from '../../assets/Chandan.jpeg'
import img2 from '../../assets/swapnil.jpeg'
import img3 from '../../assets/dipak.jpeg'
import img4 from '../../assets/bhaskar.jpeg'
import img5 from '../../assets/Kunal.jpeg'



const Team = () => {
    const team = [
      { name: 'Chandan Boruah', role: 'Founder/Co-Founder/Software Engineer', image: img1 },
      { name: 'Dipak Dutta', role: 'CEO,CIO', image: img3},
      { name: 'Swapnil Srivastava', role: 'CTO/Software Engineer', image: img2 },
      { name: 'Bhaskar jyoti Sonowal', role: 'MD', image: img4 },
       { name: 'Kunal Rastogi', role: 'Software Engineer', image: img5 },
      { name: 'Sonatan Das', role: 'Frontend Designer', image: 'data:image/jpeg;base64,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'},

    ];
  
    return (
      <section id="careers" className="py-24 bg-white">
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
