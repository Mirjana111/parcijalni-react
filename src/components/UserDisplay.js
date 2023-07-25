import React, { Component } from 'react';

class UserDisplay extends Component {
    render() {
        const { user } = this.props;

        return (
            <div>
                {user && (
                    <div>
                        <img src={user.avatar_url} alt={user.name} width="100" />
                        <h2>{user.name}</h2>
                        <h4>{user.bio}</h4>
                        <h4>{user.location}</h4>
                    </div>
                )}
            </div>
        );
    }
}
export default UserDisplay;

