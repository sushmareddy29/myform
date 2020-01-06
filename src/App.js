import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Home from './components/Home/Home';
import {Provider} from 'react-redux';
import {store} from './store'
import './App.css';


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className='App'>
                    <Home/>
                </div>
            </Provider>
        );
    }

}

export default App;
