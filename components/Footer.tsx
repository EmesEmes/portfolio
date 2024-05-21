import { FaLocationArrow } from "react-icons/fa6"
import MagicButton from "./ui/MagicButton"
import { socialMedia } from "@/data"

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-4 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">Ready to take <span className="text-purple">your </span>digital presence to the next level?</h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
        <a>
          <MagicButton 
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className=" text-sm  font-light">Made with ❤️ by Emilio</p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <img 
                src={profile.img} 
                alt="logo" 
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer