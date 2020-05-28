/*
 * @Date: 2020-03-20 21:33:19
 * @LastEditors: lifangdi
 * @LastEditTime: 2020-05-18 15:39:50
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { inject } from 'mobx-react'
import { Button, Icon, List, InputItem, Tag, DatePicker } from 'antd-mobile'
import './index.less'

@withRouter
@inject('SignupStore')
class StepTwo extends Component {
  state = {
    date: ''
  }
  render() {
    const { SignupStore: { changeCurStep, tag } } = this.props
    return (
      <div className="step2-content">
        <div className="name-form">
          <span className="form-title">昵称</span>
          <List>
            <InputItem onBlur={this.checkPhone}></InputItem>
          </List>
        </div>
        <div className="name-form">
          <span className="form-title">出生日期</span>
          <List>
            <DatePicker
              mode="date"
              // title="Select Date"
              // extra="Optional"
              value={this.state.date}
              onChange={date => this.setState({ date })}
            >
              <List.Item arrow="horizontal"></List.Item>
            </DatePicker>
          </List>
        </div>
        <div className="form">
          <div className="form-title">个性标签</div>
          <div className="tag-container">
          { tag.map((item) => <Tag key={item} className="tag-item">{item}</Tag>)}
          </div>
        </div>
        <Button onClick={() => changeCurStep(2)} className="next-btn"><Icon type="right" /></Button>
      </div>
    )
  }
}

export default StepTwo;