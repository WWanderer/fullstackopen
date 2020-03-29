import React from 'react'

const Notification = ({ message }) => {
    const notificationStyleGood = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
    }
    const notificationStyleBad = {
        color: 'red',
        fontStyle: 'italic',
        fontSize: 16
    }

    if (message === null) {
        return null
    } else if (message.includes('removed')) {
        return (
            <div style={notificationStyleBad}>
                {message}
            </div>
        )
    }

    return (
        <div style={notificationStyleGood}>
            {message}
        </div>
    )
}

export default Notification