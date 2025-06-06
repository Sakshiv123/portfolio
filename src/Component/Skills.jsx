// import React from "react";

// const Skills = () => {
//           const skills = [
//                     {
//                               logo: "logo-html5",
//                               level: "Advance",
//                               count: 86,
//                     },
//                     {
//                               logo: "logo-css3",
//                               level: "Expert",
//                               count: 80,
//                     },
//                     {
//                               logo: "logo-javascript",
//                               level: "Advance",
//                               count: 80,
//                     },
//                     {
//                               logo: "logo-react",
//                               level: "Intermediate",
//                               count: 70,
//                     },
//                        {
//                               logo: "logo-python",
//                               level: "Intermediate",
//                               count: 70,
//                       },
                
//           ];
//           return (
//                     <section id="skills" className="py-20 relative">
//                               <div className="mt-8 text-gray-100 text-center">
//                                         <h3 className="text-4xl font-semibold">
//                                                   My <span className="primary-color">Skills</span>
//                                         </h3>
//                                         <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
//                                         <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
//                                                   {skills?.map((skill, i) => (
//                                                             <div
//                                                                       key={i}
//                                                                       className="border-2 group border-primary-color relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
//                                                             >
//                                                                       <div
//                                                                                 style={{
//                                                                                           background: `conic-gradient(rgba(204, 65, 146, 0.63) ${skill.count}%,#ddd ${skill.count}%)`,
//                                                                                 }}
//                                                                                 className="w-32 h-32 flex items-center justify-center rounded-full"
//                                                                       >
//                                                                                 <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
//                                                                                           <ion-icon name={skill.logo}></ion-icon>
//                                                                                 </div>
//                                                                       </div>
//                                                                       <p className="text-xl mt-3">{skill.level}</p>
//                                                             </div>
//                                                   ))}
//                                         </div>
//                               </div>
//                     </section>
//           );
// };

// export default Skills;

import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML5", level: "Advanced", count: 86 },
    { name: "CSS3", level: "Expert", count: 80 },
    { name: "JavaScript", level: "Advanced", count: 80 },
    { name: "React", level: "Intermediate", count: 70 },
    { name: "Python", level: "Intermediate", count: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-semibold">
          My <span className="text-primary-color">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">What I Know</p>
      </div>

      <div className="max-w-6xl mx-auto px-5 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-[1.02] transition duration-300"
          >
            <h4 className="text-2xl font-bold mb-2">{skill.name}</h4>
            <p className="text-gray-400 mb-2">{skill.level}</p>
            <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
              <div
                className="bg-primary-color h-3 rounded-full"
                style={{ width: `${skill.count}%` }}
              ></div>
            </div>
            <p className="text-right text-sm text-gray-300 mt-1">{skill.count}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

