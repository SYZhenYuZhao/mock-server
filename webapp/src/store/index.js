import {createStore,applyMiddleware,subscribe} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../modules'

const store = createStore(rootReducer,{
    home:{
        num:2
    }
})
window.logInfo = []
store.subscribe(()=>{
    console.log('first')
    window.logInfo.push({time:new Date(),value:store.getState()})
})
store.subscribe(()=>{
    console.log('second')
    window.logInfo.push({time:new Date(),value:store.getState()})
})
console.log(store)

export default store