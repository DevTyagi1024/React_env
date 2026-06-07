import { Link } from 'react-router-dom'
import bannerImage from '../assets/hero.png'

function Banner(props) {
  return (
    <>
      <section className="banner" aria-label="Project introduction">
        <div className="banner-content">
          <p className="banner-kicker">{props.kicker}</p>
          <h1>{props.title}</h1>
          <p className="banner-text">
            {props.description}
          </p>
          <div className="banner-actions">
            <Link className="btn btn-primary" to={props.primaryButtonLink}>
              {props.primaryButtonText}
            </Link>
            <Link className="btn btn-secondary" to={props.secondaryButtonLink}>
              {props.secondaryButtonText}
            </Link>
          </div>
        </div>
      </section></>
  )
}

export default Banner
