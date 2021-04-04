import React from 'react';
import Header from './Header';
import Home from './Home';
import SuratPage from './SuratPage';
import {Route, Switch} from 'react-router-dom'

function MainComponent() {
    return(
        <>  
        <Header />
        <div>

            <Switch>
                <Route path="/surat" component={SuratPage}></Route>
                <Route path='/' exact component={Home}></Route>
            </Switch>
        </div>
        </>
    )
}
export default MainComponent;