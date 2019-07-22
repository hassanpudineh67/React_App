import  React,{Component} from 'react';
import './ProPlaceHolder.css';

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
           return( <div> {this.state.loading|| !this.state.person ?
           (
           <div></div>
           ):(
           <div className="ProfileStyle">
            <img className="fetchedImage" src={this.state.person.picture.large} />
            <div className="Info">{this.state.person.name.first}</div>
            <div className="Info1">{this.state.person.name.last}</div>
            <div className="Info2">{this.state.person.dob.age}</div>
            <div className="Info3">{this.state.person.email}</div>

        </div>
        )}
        </div>
        );
    }
}


