import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  return (
    <div className="header header-fixed u-unselectable header-animated">
      <div className="header-brand">
        <div className="nav-item no-hover">
          <a href='/'><h6 className="title">MZ</h6></a>
        </div>
        <div className="nav-item text-center">
          <a href="https://github.com/Borismeister" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </div>
        <div className="nav-item text-center">
          <a href="https://www.linkedin.com/in/mzadarnovskiy/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </div>
      </div>
      {/* <div className='header-nav'>
        <div className="nav-left">
          <div className="nav-item has-sub toggle-hover" id="dropdown">
            <a href='/#' className="nav-dropdown-link">Projects</a>
            <ul className="dropdown-menu dropdown-animated" role="menu">
              <li><a href="https://github.com/Borismeister/calorie_counter" target="_blank" rel="noreferrer">Calorie Counter</a></li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  )
}

