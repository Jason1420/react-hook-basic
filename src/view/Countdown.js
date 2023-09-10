import React, { useState, useEffect } from "react";


class Countdown extends React.Component {
    state = {
        count: 5
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }
    componentDidUpdate(preProps, preState) {
        if (preState.count !== this.state.count && this.state.count === 0) {
            clearInterval(this.timer);
            this.props.onTimeUp()
        }

    }
    render() {
        return (
            <div>{this.state.count} Class</div>
        )
    }
}

const NewCountdown = (props) => {
    let [count, setCount] = useState(5);
    useEffect(() => {
        if (count === 0) {
            props.onTimeUp()
            return
        }
        let timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [count])
    return (
        <div>{count} Hook</div>
    )
}

export { Countdown, NewCountdown };