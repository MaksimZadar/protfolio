import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Project.scss'
export default function Project({ title, description, link, trelloLink }: { title: string, description: string, link: string, trelloLink?: string }) {
  return (
    <div className="card">
      <div className="p-2">
        <p className="title m-0">{title}</p>
        <p className="subtitle m-0">{description}</p>
      </div>
      <div className="card__action-bar">
        <a href={link} target="_blank" className="btn " rel="noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
        {trelloLink === undefined ? null : <a href={trelloLink} target="_blank" className="btn " rel="noreferrer"><FontAwesomeIcon icon={['fab', 'trello']} /></a>}
      </div>
    </div>
  );
}