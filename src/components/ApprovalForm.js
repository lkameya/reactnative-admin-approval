import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
import { approveUser } from '../actions';
import { Card, CardSection, Button, Header } from './common';

class ApprovalForm extends Component {

    onButtonPress() {

    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Picker
                        style={{ flex: 1 }}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>

                <CardSection>

                    <Button
                        onPress={this.onButtonPress.bind(this)}
                    >
                        Approve
                    </Button>
                </CardSection>

                <CardSection>
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                    >
                        Reject
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { loading } = state.approval;
    return {
        loading
    };
};

export default connect(mapStateToProps, { approveUser })(ApprovalForm);
