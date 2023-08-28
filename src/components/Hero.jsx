import PropTypes from 'prop-types'
import { imagesUrl } from '../utils'

const Hero = ({content}) => {
  return (
    <div className="relative py-48">
        <div className=" w-full h-full absolute top-0 left-0">
           {content.hero_img !== undefined && (
             <img className="w-full h-full absolute z-0 object-cover" src={`${imagesUrl}/${content.hero_img}`} alt="Descripcion del hero" width="1280" height="853" />
           )}
        </div>
        <div className="container px-4 mx-auto z-2 relative pt-4">
            <div className='flex flex-col items-center justify-center mb-10 md:mb-0 bg-[#0000004b] max-w-3xl m-auto'>
                <h1 className="mb-8 !leading-snug text-4xl mt-10 font-semibold text-white text-center">{content.hero_title}</h1>
                <h2 className="mb-10 text-3xl leading-loose max-w-lg text-white text-center">{content.hero_description}</h2>
            </div>
        </div>
    </div>
  )
}

Hero.propTypes = {
    content: PropTypes.object.isRequired
}

export default Hero