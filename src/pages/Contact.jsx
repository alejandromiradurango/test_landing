import { useEffect } from "react"
import { CTASection, Form, TitlePage } from "../components"
import { imagesUrl } from "../utils"

const Contact = ({content}) => {

  useEffect(() => {
    document.getElementById('direccion').innerHTML = content.direccion
    document.getElementById('horario').innerHTML = content.horario
  }, [content])
  

  return (
    <section>
        <TitlePage title="Contacto" img={`${imagesUrl}/${content.cta_footer_img}`}/>
        <div className="relative py-20">
            <div className="container px-4 mx-auto z-2 relative pt-4">
                <div className="flex flex-col md:flex-row items-start justify-between">
                    <div className='flex flex-col items-center md:items-start justify-start mb-10 md:mb-0 w-1/2'>
                        <div className="relative">
                            <h1 className="mb-5 text-4xl leading-loose max-w-lg text-center md:text-left">Contacta con nosotros</h1>
                            <svg className=" m-auto absolute bottom-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 500 150" preserveAspectRatio="none">
                                <path style={{ stroke: content.main_color}} className="stroke-[7]" strokeLinecap="round" strokeLinejoin="round" d="M8.1,146.2c0,0,240.6-55.6,479-13.8"></path>
                            </svg>
                        </div>
                        <div className="flex justify-between items-center w-full mt-2 mb-8 ">
                          <div className="md:w-1/2">
                            <h3 className="text-2xl mb-5" style={{color: content.main_color}}>Dirección:</h3>
                            <div id="direccion"></div>
                          </div>
                          <div className="md:w-1/2">
                            <h3 className="text-2xl mb-5" style={{color: content.main_color}}>Horario:</h3>
                            <div id="horario"></div>
                          </div>
                        </div>
                        <iframe src={content.mapa} className="w-full block h-96" title='Ubicación de la empresa'/>
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center flex-col">
                      <Form content={content} small/>
                    </div>
                </div>
            </div>
        </div>
        <CTASection content={content} />
    </section>
  )
}

export default Contact