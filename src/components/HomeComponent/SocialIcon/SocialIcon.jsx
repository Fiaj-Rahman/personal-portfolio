import { IconButton } from "@material-tailwind/react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const SocialIcon = () => {
    return (
        <div className="flex gap-4 mt-5 mb-5">
      <IconButton data-aos="zoom-in-down"  data-aos-delay="50"  data-aos-duration="2000" className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
      <BsFacebook className="text-xl"/>
      </IconButton>
      <IconButton data-aos="zoom-in-down"  data-aos-delay="200"  data-aos-duration="2000" className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
      <FaInstagramSquare className="text-xl" />
      </IconButton>
      <IconButton data-aos="zoom-in-down"  data-aos-delay="400"  data-aos-duration="2000" className="rounded bg-[#ea4c89] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
      <FaGithub className="text-xl" />
      </IconButton>
      <IconButton data-aos="zoom-in-down"  data-aos-delay="600"  data-aos-duration="2000" className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
      <FaLinkedin className="text-xl"/>
      </IconButton>
    </div>
    );
};

export default SocialIcon;