import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import {
    numIncrease,
    numDecrement,
} from '../../modules/home'

function MakeObj () {
    this.a = 1
    this.b = 2
}
//MakeObj.prototype.obj = {}
//MakeObj.prototype.c = 3

class Home extends React.Component{
    componentDidMount(){
        //let obj = new MakeObj()
        // let obj = new MakeObj()
        // console.log(obj,'obj')
        // let proto = obj
        // while (Object.getPrototypeOf(proto) !== null) {
        //     console.log(123456)
        //     proto = Object.getPrototypeOf(proto)
        //     console.log(proto,'proto')
        // }
        // console.log(Object.getPrototypeOf(obj), 'Object.getPrototypeOf(obj) ')
        // console.log(Object.getPrototypeOf(obj) === proto)
    }

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