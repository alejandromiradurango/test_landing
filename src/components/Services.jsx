import PropTypes from 'prop-types'
import {CardService} from './index';

const Services = ({content, title = true}) => {

  const { servicio } = content

  return (
    <section className="py-20">
        <div className="container px-4 mx-auto">
            {title && (
                <div className="relative mb-10">
                    <h1 className="text-center font-semibold text-3xl">Nuestros Servicios</h1>
                    <p className='text-center mt-3 text-lg'>{content.title} ofrece los siguientes servicios:</p>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {servicio?.map(service => (
                    <CardService key={service} id={service} color={content.main_color} />
                ))}
            </div>
        </div>
    </section>
  )
}

Services.propType = {
    content: PropTypes.object.isRequired,
}

export default Services