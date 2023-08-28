import { CTASection, Services, TitlePage } from "../components"
import { imagesUrl } from "../utils"

const ServicesPage = ({content}) => {
  return (
    <section>
        <TitlePage title="Servicios" img={`${imagesUrl}/${content.cta_footer_img}`}/>
        <Services content={content} title={false} showMore={false}/>
        <CTASection content={content} />
    </section>
  )
}

export default ServicesPage