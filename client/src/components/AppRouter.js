import React from 'react'
import {Route, Switch} from 'react-router-dom'
import About from './layout/About'
import Gallery from './layout/Gallery'
import Hero from './layout/Hero'

const AppRouter = (props) => (
    <Switch>
        <Route exact path="/" component={() => (<>
            <Hero/>            
            <Gallery/>
        </>)}/>
        <Route path="/home" component={() => (<>
            <Hero/>            
            <Gallery/>
        </>)}/>
        <Route path="/about" component={About}/>
    </Switch>
)

export default AppRouter