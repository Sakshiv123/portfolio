import React from "react";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
// import project4 from "../assets/images/project-4.jpg";
// import project5 from "../assets/images/project-5.png";
//import project_person from "../assets/images/project_person1.png";

const Project = () => {
          const projects = [
                    {
                              img: project1,
                              name: "VR Web",
                              github_link: "https://github.com/Sakshiv123/Virtual-reality-web",
                              live_link: "https://virtual-reality-web.vercel.app/",
                    },
                    {
                              img: project2,
                              name: "TripTrekCG",
                              github_link: "https://github.com/Sakshiv123/TripTrekCG",
                              live_link: "https://trip-trek-cg.vercel.app/",
                    },
                    {
                              img: project3,
                              name: "Fashion Magazine",
                              github_link: "https://www.figma.com/file/KNV7tzKFl4rgKhWK2hRi0z/Untitled?type=design&node-id=0-1&mode=design&t=CE3vsmnyZWUvZCGL-0",
                              live_link: "https://www.figma.com/file/KNV7tzKFl4rgKhWK2hRi0z/Untitled?type=design&node-id=0-1&mode=design&t=CE3vsmnyZWUvZCGL-0",
                    },
                    //{
                    //           img: project4,
                    //           name: "React Nav",
                    //           github_link:
                    //                     "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
                    //           live_link: "https://reacttailwindnavbar.netlify.app",
                    // },
                    // {
                    //           img: project5,
                    //           name: "Vue Country",
                    //           github_link: "https://github.com/Sridhar-C-25",
                    //           live_link: "https://vuecountry05.netlify.app",
                    // },
          ];
          return (
                    <section id="projects" className="py-10 text-white h-[100vh]">
                              <div className="text-center">
                                        <h3 className="text-4xl font-semibold">
                                                  My <span className="primary-color">Projects</span>
                                        </h3>
                                        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
                              </div>
                              <br />
                              <div className="flex flex-col py-2 lg:flex-row max-w-6xl gap-3 px-5 mx-auto items-center relative">
                                        {/* <div className="lg:w-2/3 w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9"> */}
                                        <div className="grid sm:grid-cols-2 md:cols-3 md:grid-cols-3 gap-8 px-12 sm:px-0">
                                                  {projects.map((project_info, i) => (
                                                            <div key={i} className="bg-slate-700 rounded-xl md:w-full h-cover">
                                                                      <img src={project_info.img} alt="" className="w-full h-full object-cover rounded-t-xl" />
                                                                      <div className="p-4">
                                                                                <h3 className="text-xl my-2">{project_info.name}</h3>
                                                                                <div className="flex gap-3">
                                                                                          <a
                                                                                                    href={project_info.github_link}
                                                                                                    target="_blank"
                                                                                                    rel="noopener noreferrer"
                                                                                                    className="primary-color bg-gray-800 px-2 py-1 inline-block rounded-md"
                                                                                          >
                                                                                                    Github
                                                                                          </a>
                                                                                          <a
                                                                                                    href={project_info.live_link}
                                                                                                    target="_blank"
                                                                                                    rel="noopener noreferrer"
                                                                                                    className="primary-color bg-gray-800 px-2 py-1 inline-block rounded-md"
                                                                                          >
                                                                                                    Live Demo
                                                                                          </a>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  ))}
                                        </div>
                                        {/* <div className="lg:w-1/3 w-full lg:pl-10 mt-5 lg:mt-0">
                                                  <img src={project_person} alt="" className="w-full rounded-lg" />
                                        </div> */}
                              </div>
                    </section>
          );
};

export default Project;
