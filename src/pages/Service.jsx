import { useEffect, useState } from "react"
import { Form, MoreServices, TitlePage } from "../components"
import { apiUrl, imagesUrl } from "../utils"
import axios from "axios";
import { useParams } from "react-router-dom";

const Service = ({content}) => {

  const [service, setService] = useState({});

  const { url_seo } = useParams();

  useEffect(() => {
    axios.get(`${apiUrl}/servicios/url/${url_seo}`)
        .then(res => setService(res.data.data));
  }, [url_seo])

  useEffect(() => {
    document.getElementById('service-description').innerHTML = service.description ?? '';
  }, [service])
  
  return (
    <section>
        <TitlePage title={service.title} img={`${imagesUrl}/${content.cta_footer_img}`}/>
        <div className="relative py-20">
            <div className="container px-4 mx-auto z-2 relative pt-4">
                <div className="flex flex-col md:flex-row items-start justify-between">
                    <div className='flex flex-col items-center md:items-start justify-start mb-10 md:mb-0 w-1/2'>
                        <div className="relative">
                            <h1 className="mb-5 text-4xl leading-loose text-center md:text-left">{content.about_us_title}</h1>
                        </div>
                        <div id="service-description"></div>
                    </div>
                    <div className="lg:w-1/2 flex items-center justify-center flex-col">
                        <Form content={content}/>
                    </div>
                </div>
            </div>
        </div>
        <MoreServices content={content}/>
    </section>
  )
}

export default Service