import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import md1 from '../../md/优惠信息.md';
import md2 from '../../md/1.md';
import md3 from '../../md/肯德基&麦当劳早餐费6用于合并.md';
import './index.css';
class Index extends Component {
    componentDidMount(){
        /* eslint-disable no-undef */
        console.log(HOST);
    }
    render() {
       
        return (
            <div>
                 {/* <ReactMarkdown source={md1} /> */}
                 <img  style={{display:'none' ,width:'100px'}} src={require('../../img/1.jpg')}/>
                 <img  style={{display:'none'}} src={require('../../img/2.jpg')}/>
                 <img  style={{display:'none'}} src={require('../../img/3.jpg')}/>
                 <img  style={{display:'none'}} src={require('../../img/4.png')}/>
                 <ReactMarkdown source={md3} />
            </div>

        );
    }
}

export default Index;