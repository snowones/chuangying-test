import React, { Component } from 'react';

import './index.scss';
class MobileleTest extends Component {
    render() {
        return (
            <div className='mobilele-test'>
                <img className='background' src={require('../../img/downloadBg.png')} />
                <div className='title'>
                    三步申请 快速放款
                </div>
                <div className='step_img'>
                    <img className='icon' src={require('../../img/downloadIcon1.png')} />
                    <img className='icon' src={require('../../img/downloadIcon2.png')} />
                    <img className='icon' src={require('../../img/downloadIcon3.png')} />
                </div>
                <div className='step_title'>
                    <div className='step_title_item'>1.申请</div>
                    <div className='step_title_item'>2.审核</div>
                    <div className='step_title_item'>3.放款</div>
                </div>
                <div className='button'>
                    <div className='button-title'>
                        立即下载
                    </div>
                </div>
                <div className='footer-title1'> 
                    保持良好信用，将有助于提高借款额度和成功率！
                </div>
                <div className='footer-title2'> 
                    贷款有风险，借款需谨慎，贷款额度与放款时间等以实际审批为准
                </div>
            </div>
        );
    }
}

export default MobileleTest;