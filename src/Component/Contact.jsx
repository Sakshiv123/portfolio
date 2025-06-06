// const Contact = () => {
//           const contact_info = [
//                     { logo: "mail", text: "sv2394003@gmail.com" },
//                     { logo: "logo-whatsapp", text: "7389191742" },
//                     {
//                               logo: "location-outline",
//                               text: "Bhilai,Chhattisgarh",
//                     },
//           ];
//           return (
//                     <section id="contact" className="py-10 px-3 text-white">
//                               <div className="text-center mt-8">
//                                         <h3 className="text-4xl font-semibold">
//                                                   Contact <span className="primary-color">Me</span>
//                                         </h3>
//                                         <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

//                                         <div
//                                                   className="mt-16 flex md:flex-row flex-col
//          gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
//                                         >
//                                                   <form className="flex flex-col flex-1 gap-5">
//                                                             <input type="text" placeholder="Your Name" />
//                                                             <input type="Email" placeholder="Your Email Address" />
//                                                             <textarea placeholder="Your Message" rows={10}></textarea>
//                                                             <button className="btn-primary w-fit">Send Message</button>
//                                                   </form>
{/*                                                   <div className="flex flex-col  gap-7 ">
                                                            {contact_info.map((contact, i) => (
                                                                      <div
                                                                                key={i}
                                                                                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
                                                                      >
                                                                                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white  rounded-full">
                                                                                          <ion-icon name={contact.logo} className="bg-primary-color"></ion-icon>
                                                                                </div>
                                                                                <p className="md:text-base text-sm  break-words">
                                                                                          {contact.text}
                                                                                </p>
                                                                      </div>
                                                            ))}
                                                  </div>
                                        </div>
                              </div>
                    </section>
          );
};

export default Contact; */}

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "sv2394003@gmail.com" },
    { logo: "logo-whatsapp", text: "7389191742" },
    {
      logo: "location-outline",
      text: "Bhilai, Chhattisgarh",
    },
  ];

  return (
    <section id="contact" className="py-10 px-4 text-white">
      <div className="text-center mt-8">
        <h3 className="text-3xl md:text-4xl font-semibold">
          Contact <span className="text-primary">Me</span>
        </h3>
        <p className="text-gray-400 mt-2 md:mt-3 text-base md:text-lg">Get in touch</p>

        <div className="mt-10 md:mt-16 flex flex-col md:flex-row gap-6 max-w-5xl bg-gray-800 md:p-6 p-4 rounded-lg mx-auto">
          {/* Contact Form */}
          <form className="flex flex-col flex-1 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-gray-700 focus:outline-none text-sm md:text-base"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-3 rounded bg-gray-700 focus:outline-none text-sm md:text-base"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="p-3 rounded bg-gray-700 focus:outline-none text-sm md:text-base resize-none"
            ></textarea>
            <button className="btn-primary w-full md:w-fit px-6 py-2 rounded bg-primary text-white font-medium hover:opacity-90 transition">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 justify-center">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex items-center gap-4 flex-wrap text-left"
              >
                <div className="w-14 h-14 text-3xl flex items-center justify-center bg-primary text-white rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="text-sm md:text-base break-words">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
