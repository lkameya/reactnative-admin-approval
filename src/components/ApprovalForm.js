import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
import Calendar from 'react-native-calendar';
import { fetchAllUsers, getCurrentUser, approveWork } from '../actions';
import { Card, CardSection, Button, Spinner } from './common';


class ApprovalForm extends Component {

    componentWillMount() {
        this.props.fetchAllUsers();
    }

    onButtonPress() {
        this.props.approveWork(555, 9);
        console.log(this.props.approved);
    }   

    onTouchNext() {
        
    }

    renderPicker() {
        const { users, selectedUser } = this.props;
        if (users.length > 0) {
            return (
                <Picker
                    style={styles.picker}
                    mode="dropdown"
                    selectedValue={selectedUser}
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
                        onTouchNext={this.onTouchNext.bind(this)} 
                        showControls
                        showEventIndicators
                        customStyle={styles.customStyle}
                        eventDates={this.props.daysWork}
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
            backgroundColor: 'yellow'
        },
        flex: 1
    },
    pendingApproval: {
        hasEventCircle: {
            backgroundColor: 'yellow'
        }
    },
    validApproval: {
        hasEventCircle: {
            backgroundColor: 'green'
        }
    },
    rejectApproval: {
        hasEventCircle: {
            backgroundColor: 'red'
        }
    }
};

const mapStateToProps = state => {
    const { users, selectedUser, works } = state.users;
    const { approved } = state.approval;
    console.log(approved);
    const daysWork = [];
    const year = works.year;
    const month = works.month;

    _.map(works.weeks, (week) => {
        if (week.status !== 'approved') {
            _.map(week.days_in_week, (day) => {
                const date = `${year}-${month}-${day.day_number}`;
                daysWork.push(date);
            });
        }
    });
    return { users, selectedUser, daysWork, approved };
};

export default connect(mapStateToProps, {
    fetchAllUsers,
    getCurrentUser,
    approveWork
})(ApprovalForm);
