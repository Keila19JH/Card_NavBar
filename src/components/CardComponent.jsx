import PropTypes from "prop-types";

export const Card = ({image, title, subtitle, body, link, titleLink}) => {
    return (
      <>
        <div className="container mt-4">
            <div className="card" style={{width: '18rem'}}>
                <img src={image} className="card-image-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
                    <p>{body}</p>
                    <a href={link} className="card-link">{titleLink}</a>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    titleLink: PropTypes.string,
  }
  
  