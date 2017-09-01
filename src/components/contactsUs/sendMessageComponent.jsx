import React from 'react';
import axios from 'axios';
import {notify} from '../../services/notify';
import '../../../styles/index.scss';

export default class SendMessageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      query: '',
    }
    this.sendMessage = this.sendMessage.bind(this);
  }
    sendMessage(){
    console.log(this.state.name, this.state.email, this.state.query);
    // axios.post('/create', {name: this.state.name, email: this.state.email, query: this.state.query})
    //     .then(function(response){
    //       console.log(response);
    //     })
    if(this.state.query !== ''){
      notify('Thank You', 'Your query has been submitted successfully', 'success');
      this.setState({
        name: '',
        email: '',
        query: ''
      });
    }else{
      notify('Opps !', 'First fill your query', 'warning');
    }
    }
  render() {
    return (
      <div>
        <section className="story-photo section-padding second">
           <div className="container">
              <div className="row">
                 <div className="col-md-12 zero-padding wow fadeInUp">
                    <div className="col-md-12 zero-padding">
                       <h2 className="heading-title-squad text-center">Send a message</h2>
                       <div></div>
                       <div className="col-sm-6 col-md-4">
                          <div className="col-md-12 contact-form">
                             <form>
                                <div className="form-group">
                                   <input type="text"
                                     name="your-name"
                                     className="form-control"
                                     id="form-name"
                                     placeholder="Your Name"
                                     value={this.state.name}
                                     onBlur={(e) => { this.setState({deviceType: this.state.name.trim()}); }}
                                      onChange={(e) => {this.setState({name: e.target.value})}}></input>


                                </div>
                                <div className="form-group">
                                   <input type="email"
                                     name="your-email"
                                     className="form-control"
                                     id="form-email"
                                     placeholder="Your Email"
                                     value={this.state.email}
                                     onBlur={(e) => { this.setState({email: this.state.email.trim()}); }}
                                      onChange={(e) => {this.setState({email: e.target.value})}}></input>

                                </div>
                                <div className="form-group">
                                   <textarea
                                     className="form-control"
                                     rows="3" id="comment"
                                     placeholder="Your Query"
                                     value={this.state.query}
                                     onBlur={(e) => { this.setState({query: this.state.query.trim()}); }}
                                      onChange={(e) => {this.setState({query: e.target.value})}}></textarea>
                                </div>
                                <button type="button" className="btn btn-primary" id="sen-tab"
                                  onClick={()=>this.sendMessage()}>{"Send Message"}</button>
                             </form>
                          </div>
                       </div>
                       <div className="col-sm-6 col-md-8 map-section">
                          <div className="col-md-12">
                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447989.43115232297!2d76.81115297302966!3d28.692116453166058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff32f%3A0xfc5606ed1b5d46c3!2sDelhi!5e0!3m2!1sen!2sin!4v1503915254004"
                             width="100%"
                             height="400"
                             frameBorder="0"
                             style={{"border": "0"}}
                             allowFullScreen></iframe>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </div>
    )
  }
}
