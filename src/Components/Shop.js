import React, {Component} from 'react';
import './ProPlaceHolder.css';

class Shop extends Component {


        buttonClicked(){
            alert("به زودی با شما تماس می گیریم.")
        }
    render() {
        return (
            <div className="myShoppingPage">
                <div className="UserOtherInfo">
                    <h4>شماره تماس</h4>
                </div>
                <div className="UserOtherInfo1">
                    <h4>محل سکونت</h4>
                </div>
                <div className="UserOtherInfo2">
                    <h4>آدرس ایمیل </h4>
                </div>
                <div className="UserOtherInfoContent">
                    <input type="number" placeholder="شماره تماس خود را وارد کنید"/>
                </div>
                <div className="UserOtherInfoContent1">
                    <input type="text" placeholder="آدرس خود را وارد کنید"/>
                </div>
                <div className="UserOtherInfoContent2">
                    <input type="text" placeholder="آدرس ایمیل خود را وارد کنید"/>
                </div>
                <button onClick={this.buttonClicked}>
                    ثبت اطلاعات
                </button>

            </div>

        );
    }
}

export default Shop;