import { useState } from 'react'

import './App.css'

import ActionBar from './components/ActionBar'
import articles from './articles'
import ArticleList from './components/ArticleList'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [industry, setIndustry] = useState(null)
  const [useCase, setUseCase] = useState(null)

  return (
    <div className='container'>
      <ActionBar
        setTechnologies={setTechnologies}
        setIndustry={setIndustry}
        setUseCase={setUseCase}
      />
      <ArticleList
        articles={articles}
        technologies={technologies}
        industry={industry}
        useCase={useCase}
      />
    </div>
  )
}

export default App
