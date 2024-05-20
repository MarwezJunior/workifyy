import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const BaseFooter = () => {
  const year = new Date().getFullYear();

  return (
    <div className="border-t border-solid border-[#ffffff33] ">
      <div className="flex justify-between px-7 py-5 tablet:flex-col tablet:items-center tablet:gap-10 ">
        <div>
          <p className="text-[1.3rem] text-[#32CD32] tablet:text-center">
            &copy; {year}WORKIFYY. All rights reserved
          </p>
        </div>

        <ul className=" flex gap-16 text-[1.5rem]  mobile:gap-10">
          <li>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="text-[2rem] text-[#32CD32]"
            >
              <FaInstagram />
            </a>
          </li>

          <li>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="text-[2rem] text-[#32CD32]"
            >
              <FaTiktok />
            </a>
          </li>

          <li>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="text-[2rem] text-[#32CD32]"
            >
              <FaXTwitter />
            </a>
          </li>

          <li>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="text-[2rem] text-[#32CD32]"
            >
              <FaFacebook />
            </a>
          </li>

          <li>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="text-[2rem] text-[#32CD32]"
            >
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BaseFooter;
