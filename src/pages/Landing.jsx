import { AboutUs, CTASection, Features, Hero, Services, Rated } from "../components"
import PropTypes from 'prop-types'

const Landing = ({content}) => {
  return (
    <>
        <Hero content={content}/>
        <AboutUs content={content} />
        <Features content={content}/>
        <CTASection content={content} />
        <Services content={content} />
        <Rated content={content}/>
    </>
  )
}

Landing.propTypes = {
    content: PropTypes.object.isRequired
}

export default Landing