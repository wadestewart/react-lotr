import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Movie from './Movie'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Movie title="The Fellowship of the Ring"/>,
    document.getElementById('root'))
registerServiceWorker()
