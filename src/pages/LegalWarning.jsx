import { useEffect } from "react"
import { TitlePage } from "../components"
import { imagesUrl } from "../utils"

const LegalWarning = ({content}) => {

  useEffect(() => {
    document.getElementById('legal-warning').innerHTML = content.aviso_legal ?? ''
  }, [content])

  return (
    <section>
        <TitlePage title="Aviso legal" img={`${imagesUrl}/${content.cta_footer_img}`}/>
        <div className="container px-4 py-10">
          <p id="legal-warning"></p>
        </div>
    </section>
  )
}

export default LegalWarning