import React from "react";
import aboutImg from "../assets/aboutImg.jpg";
const About = () => {
          const info = [
                    { text: "Years experience", count: "01" },
                    { text: "Completed Projects", count: "05" },
                    { text: "Internship Done", count: "02" },
          ];
          return (
                    <section id="about" className=" text-white">
                              <div className="text-center mt-8">
                                        <h3 className="text-4xl font-semibold">
                                                  About <span className="primary-color">Me</span>
                                        </h3>
                                        <p className="text-gray-400 my-3 text-lg">My introduction</p>
                                        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                                                  <div className="p-2">
                                                            <div className="text-gray-300 my-3">
                                                                      <p className="text-justify leading-7 w-11/12 mx-auto">
                                                                              "With over a year of dedicated experience in web development, 
                                                                                I am driven by a strong passion for building intuitive digital experiences. 
                                                                                Eager to grow as a full-stack developer, I am also expanding my expertise in machine learning, 
                                                                                aiming to integrate intelligent solutions into modern web applications."
                                                                      </p>
                                                                      <div className="flex mt-10 items-center gap-7">
                                                                                {info.map((content) => (
                                                                                          <div key={content.text}>
                                                                                                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                                                                                                              {content.count}
                                                                                                              <span className="primary-color">+</span>{" "}
                                                                                                    </h3>
                                                                                                    <span className="md:text-base  text-xs">{content.text}</span>
                                                                                          </div>
                                                                                ))}
                                                                      </div>
                                                                      <br />
                                                                      <br />
                                                                      <a href="./src/assets/Code_a_program.pdf" download>
                                                                                <button className="btn-primary">Download CV</button>
                                                                      </a>
                                                            </div>
                                                  </div>
                                                  <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                                                            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                                                                      <img
                                                                                src={aboutImg}
                                                                                alt=""
                                                                                className="w-full object-cover bg-primary-color rounded-xl"
                                                                      />
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </section>
          );
};

export default About;
