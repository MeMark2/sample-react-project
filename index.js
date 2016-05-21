import React from 'react'
import { render } from 'react-dom'
import AppRoutes from './src/AppRoutes'

// App styles
require('./src/styles/App.sass')

render(<AppRoutes/>, document.getElementById('app'))