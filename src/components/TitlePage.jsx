const TitlePage = ({title, img}) => {
  return (
    <div className="relative overflow-hidden py-20 bg-center">
        {!img.includes('undefined') && (
          <img className="absolute top-0 left-0 object-cover brightness-90" src={img} alt="" width="2000" height="737"/>
        )}
        <span className="text-white block text-center relative z-20 font-semibold text-6xl">{title}</span>
    </div>
  )
}

export default TitlePage