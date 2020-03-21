/*
 * @Date: 2020-03-19 04:54:06
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-03-21 13:39:15
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { WingBlank, WhiteSpace, Steps } from 'antd-mobile'
import './index.less'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import SignHeader from './SignHeader'
import { MyIcon } from '../../components/Icons';


const Step = Steps.Step;

@withRouter
@inject('SignupStore')
@observer
class Singup extends Component {
  renderCurStep = () => {
    const { SignupStore: { curStep, changeCurTitle } } = this.props
    switch (curStep) {
      case 0:
        changeCurTitle('个人信息')
        return <StepOne />
      case 1:
        changeCurTitle('个性标签')
        return <StepTwo />
      case 2:
        changeCurTitle('邀请同游人')
        return <StepThree />
      default:
        break;
    }
  }


  render() {
    const { SignupStore: { curStep, curTitle } } = this.props
    const { clientHeight } = this.props
    return (
      <div style={{height: clientHeight}} className="container">
        <SignHeader title={curTitle}/>
        <WingBlank mode={20}>
          <WhiteSpace size="xl" />
          <Steps current={curStep} direction="horizontal">
            <Step icon={<MyIcon type="icondot-circle-solid" className="cur-icon" />} />
            <Step icon={<MyIcon type="icondot-circle-solid" className={(curStep > 1 || curStep === 1) && "cur-icon"} />} />
            <Step icon={<MyIcon type="icondot-circle-solid" className={curStep === 2 && "cur-icon"} />} />
          </Steps>
          <WhiteSpace size="xl" />
          <div className="step-content">{this.renderCurStep()}</div>
        </WingBlank>
      </div>
    )
  }
}

export default Singup;