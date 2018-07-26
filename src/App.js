import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Welcome } from './jsxs/Welcome.jsx';
import { Main } from './jsxs/Main.jsx';
import { Askform } from './jsxs/Askform.jsx';
import { Coins } from './jsxs/Coins.jsx';
import { Provider } from 'react-redux';
import { Results } from './jsxs/Results.jsx';
import store from './store.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Otherculture } from './jsxs/Otherculture.jsx';
import { History } from './jsxs/History.jsx';
import { Glossary } from './jsxs/Glossary.jsx';
import { Login } from './jsxs/Login.jsx';
import { Glossary_page } from './jsxs/Glossary_page.jsx';

library.add(faInfoCircle, faArrowRight );

class App extends React.Component {
    
    render () {
        return (
            <BrowserRouter>
           <Provider store={store}> 
    <Switch>
    <Route exact path="/" component={ Welcome } />
    <Route path="/main" component={ Main } />
    <Route path="/login" component={ Login } />
    <Route exact path="/ask" component={ Askform } />
    <Route exact path="/ask/guas" component={ Coins } />
    <Route exact path="/ask/results" component={ Results } />
    <Route path="/links" component={ Otherculture } />
    <Route path="/history" component={ History } />
    <Route path="/glossary/:gua/:id" component={ Glossary_page } />
    <Route exact path="/glossary" component={ Glossary } />
    </Switch>
    </Provider>
    </BrowserRouter>
            );
    }
}

export default App;