import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import {LocaleProvider} from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import App from './router'
import store from './store'
 
ReactDOM.render(
   ( 
    <Provider store={store}>
        <HashRouter>
            <LocaleProvider locale={zhCN}>
                <App/>
            </LocaleProvider>
        </HashRouter>
    </Provider>
    ),
    document.getElementById('app')
);