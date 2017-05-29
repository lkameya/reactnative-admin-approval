import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ApprovalForm from './components/ApprovalForm';
import { Header } from './components/common';


class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <View style={{ flex: 1 }}>
                    <Header headerText="Time Approval" />
                    <ApprovalForm />
                </View>

            </Provider>
        );
    }
}

export default App;
