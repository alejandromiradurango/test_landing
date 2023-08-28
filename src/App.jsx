import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import { Layout } from './components/index';
import { AboutUsPage, Contact, CookiesPolicy, Landing, LegalWarning, PrivacyPolicy, Service, ServicesPage } from "./pages";
import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { apiUrl, landing_id } from "./utils";
import TagManager from 'react-gtm-module'

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

const App = () => {

  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${apiUrl}/landing/${landing_id}`)
      .then(res => {
        setContent(res.data?.data);

        TagManager.initialize({
          gtmId: res.data?.data.GTM_ID
        })

        setLoading(false);
      })
  }, [])
  

  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Layout content={content} loading={loading}/>}>
            <Route index element={<Landing content={content}/>} />
            <Route exact path="/conocenos" element={<AboutUsPage content={content}/>} />
            <Route exact path="/servicios" element={<ServicesPage content={content}/>} />
            <Route exact path="/servicios/:url_seo" element={<Service content={content}/>} />
            <Route exact path="/contacto" element={<Contact content={content}/>} />
            <Route exact path="/aviso-legal" element={<LegalWarning content={content}/>} />
            <Route exact path="/politica-de-privacidad" element={<PrivacyPolicy content={content}/>} />
            <Route exact path="/politica-de-cookies" element={<CookiesPolicy content={content}/>} />
          </Route>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}

export default App