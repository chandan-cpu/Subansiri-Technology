const projects = [
    {
      id: 1,
      title: "Modern Hostel Management System",
      desc: "A comprehensive system to manage hostel operations including room allocation, fee management, and maintenance requests.",
      img: "https://res.cloudinary.com/dl9o5oenm/image/upload/v1765192384/Screenshot_2025-11-17_232338_bhvpay.png",
      githubLink: "https://github.com/chandan-cpu/Hostel-Management-System",
      link: "https://hostel-management-system-client4.onrender.com/",
      "tech": ["React.js", "Node.js", "MongoDB", "Stripe", "Redux", "Express", "JWT", "AWS S3"]
    },
    {
      id: 2,
      title: "Borrow Book - Book Lending Platform",
      desc: "A platform to lend and borrow books within a community, featuring user profiles, book listings, and messaging.",
      img: "https://res.cloudinary.com/dl9o5oenm/image/upload/v1765192372/Screenshot_2025-12-08_163435_enva1b.png",
      githubLink: "https://github.com/chandan-cpu/Book-Libary",
      link: "https://book-libary-frontend1.onrender.com/login"
    },
    {
      id: 3,
      title: "Morisika A E-commerce Website",
      desc: "E- commerce site for Handcrafted frames celebrating Assamese heritage and culture",
      img: "https://res.cloudinary.com/dl9o5oenm/image/upload/v1765193399/Screenshot_2025-12-08_164544_dphbft.png",
      githubLink: "https://github.com/chandan-cpu/MorisikaProject",
      link: "#"
    },
      {
      id: 4,
      title: "School Portfolio",
      desc: "A portfolio website for a school to showcase their achievements, events, and facilities.",
      img: "https://res.cloudinary.com/dl9o5oenm/image/upload/v1769508236/Screenshot_2026-01-27_100223_zwhjyy.png",
      githubLink: "https://github.com/chandan-cpu/MorisikaProject",
      link: "https://schoolmanagement-system-g3a3.onrender.com"
    }

  ]

const ProjectShowcase = () => {
  return (
    <section className="py-14 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Projects
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/90 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-300 px-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {project.desc}
              </p>
              <a
                href={project.link}
                className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
