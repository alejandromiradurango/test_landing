import { useEffect } from "react"
import { TitlePage } from "../components"
import { imagesUrl } from "../utils"

const CookiesPolicy = ({content}) => {

  useEffect(() => {
    document.getElementById('cookies-policy').innerHTML = content.politica_cookies ?? ''
  }, [content])

  return (
    <section>
        <TitlePage title="Política de cookies" img={`${imagesUrl}/${content.cta_footer_img}`}/>
        <div className="container px-4 py-10">
          <p id="cookies-policy"></p>
        </div>
    </section>
  )
}

export default CookiesPolicy