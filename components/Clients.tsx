import { companies, testimonials } from "@/data"
import { InfiniteMovingCards } from "./ui/infiniteMovingCards"


const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className='heading'>
        Kind words from
        <span className='text-purple'> satisfied clients</span>
      </h1>
      <div className='flex flex-col items-center my-10 lg:my-20'>
        <InfiniteMovingCards 
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10 lg:mt-20">
          {companies.map(({id, img, name, nameImg}) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img 
                src={img}
                alt={name}
                className="md:w-10 w-5"
              />
              <img 
                src={nameImg}
                alt={name}
                className="md:w-24 w-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients