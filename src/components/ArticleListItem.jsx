import { Link } from 'react-router-dom'
import './ArticleListItem.css'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'

export default function ArticleListItem({ article }) {
  return (
    <li className='article-list-item'>
      <Link to={article.url} reloadDocument>
        <img src={article.image} alt={article.title} />
        <h5>{article.title}</h5>
        <p>{article.description}</p>
        <div className='drawer'>
          <span>
            {article.technologies.map((tech) => tech.toUpperCase()).join(', ')}
          </span>
          <ReplyOutlinedIcon className='invert' />
        </div>
      </Link>
    </li>
  )
}
