import { useEffect } from 'react'
import { TitlePage } from '../components'
import { imagesUrl } from '../utils'

const PrivacyPolicy = ({content}) => {

  useEffect(() => {
    document.getElementById('privacy-policy').innerHTML = content.privacidad ?? ''
  }, [content])
  

  return (
    <section>
        <TitlePage title="Política de privacidad" img={`${imagesUrl}/${content.cta_footer_img}`}/>
        <div className="container px-4 py-10">
            <p id="privacy-policy"></p>
        </div>
    </section>
  )
}

export default PrivacyPolicy