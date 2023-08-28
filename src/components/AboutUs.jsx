import PropTypes from 'prop-types'

const AboutUs = ({content}) => {
  return (
    <section className="py-20 relative overflow-hidden">
        <div className="container flex flex-col items-center justify-center space-y-6">
            <span className='text-4xl font-semibold'>{content.about_us_title}</span>
            <p className='text-3xl text-center'>{content.cta_footer_button_text}</p>
            <span className='text-3xl text-center relative'>
                Primera visita gratuita
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" className='absolute -bottom-4 right-0 h-16 w-24'>
                    <path className=' fill-none stroke-[9]' style={{ stroke: content.main_color }} strokeLinecap='round' strokeDasharray={1500} strokeLinejoin='round' d="M6.1,133.6c0,0,173.4-20.6,328.3-14.5c154.8,6.1,162.2,8.7,162.2,8.7s-262.6-4.9-339.2,13.9 c0,0,113.8-6.1,162.9,6.9"></path>
                </svg>
            </span>
            <a href="#" style={{ background: content.main_color }} className='py-2.5 px-8 rounded-md font-semibold text-white text-sm !mt-8'>{content.about_us_button_text}</a>
        </div>
    </section>
  )
}

AboutUs.propTypes = {
    content: PropTypes.object.isRequired
}

export default AboutUs