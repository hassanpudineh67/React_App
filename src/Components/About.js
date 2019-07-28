import React,{Component} from 'react';
import './ProPlaceHolder.css';
export default class About extends Component {
    state = {
        loading: true,
        person: null
    };

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results[0], loading: false});
    }

    render() {
        return (<div className="FetchedContent"> {this.state.loading || !this.state.person ?
                (
                    <div></div>
                ) : (

                    <div className="Fetch">
                        <div className="InfoAbout"><p>{this.state.person.gender}</p></div>
                        <div className="Info1About"><p>{this.state.person.registered.date}</p></div>
                        <div className="Info2About"><p>{this.state.person.phone}</p></div>
                        <div className="Info3About"><p>{this.state.person.location.postcode}</p></div>
                        <div className="Info1TitleAbout">جنسیت</div>
                        <div className="Info2TitleAbout">تاریخ ثبت نام</div>
                        <div className="Info3TitleAbout">تلفن همراه</div>
                        <div className="Info4TitleAbout">کد پستی</div>
                        <div className="PishkhanAbout">
                            <p>پیشخوان کاربر</p>
                        </div>
                    </div>

                )}
            </div>
        );
    }
}