// components/ContactSection.tsx
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function ContactContent() {
  // Social icons ke sath URLs
  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/anas41/" },
    { icon: FaGithub, url: "https://github.com/HAnas41" },
    { icon: FaInstagram, url: "https://www.instagram.com/anasanas56/" },
    { icon: FaEnvelope, url: "mailto:muhammadanaas.334@gmail.com" },
  ];

  return (
    <div className="bg-[#070E1B] text-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Side - Form */}
        <div>
          <h2 className="text-2xl mb-6">Send us a message 🚀</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-md bg-transparent border border-gray-600 focus:outline-none"
            />
            <button className="bg-[#F2C010] text-black font-semibold text-sm py-3 px-6 rounded-2xl hover:bg-[#F2C010] transition w-auto self-start">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Info */}
        <div className="flex flex-col justify-center md:pl-16"> 
          <h3 className="text-2xl font-semibold mb-6">
            Let's Chat. <br /> Tell me about your project
          </h3>
          <p className="text-[#9EA2AD] mb-6">Let’s create something together 🤘</p>
          
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-3 text-gray-300">
              <div className="p-3 border border-gray-500 rounded-full">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Email</h4>
                <span className="text-[#9EA2AD]">muhammadanaas.334@gmail.com</span>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3 text-gray-300">
              <div className="p-3 border border-gray-500 rounded-full">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Address</h4>
                <span className="text-[#9EA2AD]">Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          <h3 className="mt-6 mb-3 text-lg text-[#9EA2AD]">
            Visit my social profiles and get connected
          </h3>
          
          {/* Social Icons */}
          <div className="flex space-x-4 text-xl">
            {socialLinks.map(({ icon: Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-500 rounded-full cursor-pointer hover:bg-yellow-400 hover:text-black transition flex items-center justify-center"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
