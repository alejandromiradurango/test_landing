import { useEffect } from "react"
import { CTASection, Form, TitlePage } from "../components"
import { imagesUrl } from "../utils"

const AboutUsPage = ({content}) => {

  useEffect(() => {
    document.getElementById('about-us').innerHTML = content.about_us_description
  }, [content])
  

  return (
    <section>
        <TitlePage title="Conócenos" img={`${imagesUrl}/${content.cta_footer_img}`} />
        <div className="relative py-20">
            <div className="container px-4 mx-auto z-2 relative pt-4">
                <div className="flex flex-col lg:flex-row items-start justify-between">
                    <div className='flex flex-col items-center md:items-start justify-start mb-10 lg:mb-5 w-full lg:w-1/2'>
                        <h1 className="mb-5 !leading-snug text-4xl font-medium text-center md:text-left">{content.about_us_title}</h1>
                        <div className="relative">
                            <h2 className="mb-5 text-3xl leading-loose lg:max-w-lg text-center md:text-left">Reformas a medida</h2>
                            <svg className=" m-auto absolute bottom-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 500 150" preserveAspectRatio="none">
                                <path style={{ stroke: content.main_color}} className="stroke-[7]" strokeLinecap="round" strokeLinejoin="round" d="M8.1,146.2c0,0,240.6-55.6,479-13.8"></path>
                            </svg>
                        </div>
                        <p id="about-us" className="leading-relaxed text-md lg:max-w-md text-center md:text-left"></p>
                    </div>
                    <div className="lg:w-1/2 mx-auto flex items-center justify-center flex-col">
                        <Form content={content} small/>
                    </div>
                </div>
            </div>
        </div>
        <CTASection content={content} />
    </section>
  )
}

export default AboutUsPage