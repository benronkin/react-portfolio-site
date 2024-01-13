import ArticleListItem from './ArticleListItem'

import './ArticleList.css'

export default function ArticleList({
  articles,
  technologies,
  industry,
  useCase,
}) {
  // const techs = articles.flatMap((article) => article.technologies)
  // const set = new Set(techs)
  // console.log(
  //   JSON.stringify(
  //     [...set].sort().map((article) => ({ value: article, label: '' })),
  //     null,
  //     2
  //   )
  // )

  const availArticles = articles.filter(
    (article) =>
      (technologies.length === 0 ||
        technologies.every((tech) => article.technologies.includes(tech))) &&
      (!industry || article.industries.includes(industry)) &&
      (!useCase || article.useCases.includes(useCase))
  )
  return (
    <>
      {availArticles.length === 0 && (
        <p className='article-list-message'>
          No available case studies that meet these criteria.
        </p>
      )}
      <ul className='article-list'>
        {availArticles &&
          availArticles.map((article) => (
            <ArticleListItem key={article.id} article={article} />
          ))}
      </ul>
    </>
  )
}
