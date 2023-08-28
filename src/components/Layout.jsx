import { Outlet } from "react-router-dom"
import { Header, Footer } from "./index"
import PropTypes from 'prop-types';

const Layout = ({content, loading}) => {

  return (
    <> 
        {!loading && (
          <>
            <Header content={content}/>
            <Outlet />
            <Footer content={content}/>
          </>
        )}
    </>
  )
}

Layout.propTypes = {
    content: PropTypes.object.isRequired
}

export default Layout