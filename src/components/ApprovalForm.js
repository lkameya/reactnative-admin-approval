import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
import Calendar from 'react-native-calendar';
import { fetchAllUsers, getCurrentUser } from '../actions';
import { Card, CardSection, Button, Spinner } from './common';


class ApprovalForm extends Component {

    componentWillMount() {
        this.props.fetchAllUsers();
    }

    onButtonPress() {

    }

    renderPicker() {
        const { users, selectedUser } = this.props;
        console.log(selectedUser);
        if (users.length > 0) {
            return (
                <Picker
                    style={styles.picker}
                    mode="dropdown"
                    selectedValue={this.props.selectedUser}
                    onValueChange={user => this.props.getCurrentUser(user)}
                >
                    {users.map(user =>
                        <Picker.Item key={user.id} label={user.username} value={user.id} />)}

                </Picker>
            );
        }
        return <Spinner size="large" />;
    }

    render() {
        return (
            <Card>
                <CardSection>
                    {this.renderPicker()}
                </CardSection>

                <CardSection>
                    <Calendar
                        showControls
                        showEventIndicators
                        customStyle={styles.customStyle}
                        eventDates={['2017-02-05']}

                    />
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

const styles = {
    picker: {
        flex: 1
    },
    customStyle: {
        hasEventCircle: {
            backgroundColor: 'black'
        },
        flex: 1 
    }
};

const mapStateToProps = state => {
    const { users, selectedUser } = state.users;
    return { users, selectedUser };
};

export default connect(mapStateToProps, { fetchAllUsers, getCurrentUser })(ApprovalForm);
