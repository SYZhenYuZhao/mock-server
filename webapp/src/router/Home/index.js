import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import {
    numIncrease,
    numDecrement,
} from '../../modules/home'

class Home extends React.Component{

    render(){
        return(<div>
            <Button type='primary' onClick={this.props.numIncrease}>+</Button>
            {this.props.num}  
            <Button type='primary' onClick={this.props.numDecrement}>-</Button>
        </div>)
    }
}

const mapStateToProps = (state)=>{
    return {
        num:state.home.num
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        numIncrease: numIncrease(dispatch),
        numDecrement: numDecrement(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)