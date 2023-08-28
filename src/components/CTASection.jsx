import PropTypes from 'prop-types'
import { imagesUrl } from '../utils'

const CTASection = ({content}) => {
  return (
    <section className="py-20 relative overflow-hidden">
        <img src={`${imagesUrl}/${content.about_us_img}`} className='w-full bg-blue-200 absolute top-0 left-0'/>
        <div className="container bg-white rounded-lg shadow relative z-20 py-10 px-20 flex justify-between items-center">
            <div className='flex flex-col justify-center items-start gap-4'>
                <span className='text-3xl' style={{ color: content.main_color }}>Primera consulta gratuita</span>
                <span className='text-2xl'>Estaremos encantados de ayudarte</span>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 max-w-[240px] w-full'>
                <a href="" className='p-2.5 text-white rounded font-semibold w-full text-center' style={{ background: content.secondary_color }}>Escribenos</a>
                <a href="" className='p-2.5 text-white rounded font-semibold w-full text-center' style={{ background: content.main_color }}>{content.phone}</a>
            </div>
        </div>
    </section>
  )
}

CTASection.propTypes = {
    content: PropTypes.object.isRequired
}

export default CTASection