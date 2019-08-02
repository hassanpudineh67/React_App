import  React,{Component} from 'react';
import '../css/ProPlaceHolder.css';

export default class FetchRandomUser extends Component{
    state={
        loading: true,
        person: null
    };
    async componentDidMount(){
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data =await response.json();
        this.setState({person: data.results[0], loading: false});
    }
   render(){
           return( <div className="FetchedContent"> {this.state.loading|| !this.state.person ?
           (
           <div></div>
           ):(

        <div className="Fetch">
            <img className="fetchedImage" src={this.state.person.picture.large} />
            <div className="Info"><p>{this.state.person.name.first}</p></div>
            <div className="Info1"><p>{this.state.person.name.last}</p></div>
            <div className="Info2"><p>{this.state.person.dob.age}</p></div>
            <div className="Info3"><p>{this.state.person.email}</p></div>
            <div className="Info1Title">نام</div>
            <div className="Info2Title">نام خانوادگی</div>
            <div className="Info3Title">سن</div>
            <div className="Info4Title">آدرس ایمیل</div>
            <div className="Pishkhan">
                 <p>پیشخوان کاربر</p>
            </div>
        </div>

        )}
        </div>
        );
    }
}


