import {Form} from '../components/'

const Features = ({content}) => {

  const features = [
    {
        label:'Mejor precio',
        description:'Tarifas competitivas, descuentos, coberturas médicas y facilidad de financiación.'
    },
    {
        label:'Presupuestos accesibles',
        description:'Llámanos y evaluaremos tu caso sin compromiso alguno. ¡Infórmate ahora!'
    },
    {
        label:'Trato personalizado',
        description:'Eres único para nosotros, por ello cuidaremos de ti y de tus necesidades. Solicite una cita ahora'
    },
    {
        label:'Calidad de servicio',
        description:'Disponemos de la última tecnología para poder atenderte de la mejor manera.'
    },
  ]

  return (
    <section className="py-10 relative overflow-hidden">
        <div className="container px-4 mx-auto relative z-20">
            <div className="flex items-center">
                <div className='w-5/6 grid grid-cols-1 md:grid-cols-2 gap-y-6 space-x-6 m-auto'>
                    {features.map((feature, index) => (
                        <div key={index} className='max-w-sm m-auto'>
                            <span className='block text-center text-3xl mb-4' style={{ color: content.secondary_color }}>{feature.label}</span>
                            <p className='text-lg'>{feature.description}</p>
                        </div>
                    ))}
                </div>
                <Form content={content}/>
            </div>
        </div>
    </section>
  )
}

export default Features