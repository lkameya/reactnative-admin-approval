import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import ApprovalForm from './components/ApprovalForm';
import { Header } from './components/common';


class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{ flex: 1 }}>
                    <Header headerText="Time Approval" />
                    <ApprovalForm />
                </View>

            </Provider>
        );
    }
}

export default App;
