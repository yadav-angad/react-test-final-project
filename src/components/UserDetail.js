import React from 'react';

const UserDetail = (props) => {
    const id = props.match.params.userId;
    console.log('id : ', id);

    return(
        <>
        <h2>Hello</h2>
        </>
    );
};

export default UserDetail;