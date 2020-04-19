import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import imgRF from './imgRF.jpg';
import imgNsk from  './imgNsk.jpg';
import './style.css';


class Container extends React.Component {
  constructor() {
    super();
    this.state = { 
      title: "Новосибирск, Россия",
      people: "2 798 170 чел. (2020 г.)"
    }
  }

  render() { 
    return <div>
      <Header page={this.state.title}/>
      <div class="people"> В городе проживает {this.state.people}</div> 
      <img src={imgRF} height="250" alt="Флаг России"/>
      <img src={imgNsk} height="250" alt="Флаг Новосибирска"/>
      <Footer/>
    </div>
  };
}

ReactDOM.render(<Container />, document.getElementById('root'));
