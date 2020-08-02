import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './Home'
import { Editor } from './Editor'
import { Contact } from './Contact'

export function Main() {
    return (
        <main className="container">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/editor" component={Editor} />
            <Route path="/contact-us" component={Contact} />
        </Switch>
    </main>
    )
}