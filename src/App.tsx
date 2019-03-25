import React, { Component } from 'react';
import './App.css';
import Handbooks from './components/Handbooks';
import IMyAppState from './interfaces/IHandbooks';


//interface IMyAppState {
//  handbooks: Array<IHandbook>;
//}

//interface IHandbook {
 // id: number;
 // content: IHandbookContent;
 // lastedited: string;
 /// logo: string;
//}

//interface IHandbookContent {
  //title: string;
  //description: string;
  ////type: string;
//}

class App extends Component {
    state: IMyAppState = {
    handbooks: [
      {
        id: 1,
        content: {
          title: "For leaders and group managers",
          description: "description",
          type: "Leaders handbook"
        },        
        lastedited: new Date().toLocaleDateString(),
        logo: "http://jionewszone.com/CategoryImage/12102016globalbusiness.jpg"
      },
      {
        id: 2,
        content: {
          title: "For leaders and group managers",
          description: "description",
          type: "Leaders handbook"
        },   
        lastedited: new Date().toLocaleDateString(),
        logo: "http://jionewszone.com/CategoryImage/12102016globalbusiness.jpg"
      },
      {
        id: 3,
        content: {
          title: "For leaders and group managers",
          description: "description",
          type: "Leaders handbook"
        },   
        lastedited: new Date().toLocaleDateString(),
        logo: "http://jionewszone.com/CategoryImage/12102016globalbusiness.jpg"
      }
    ]
  }

  render() {
    return (
      <div className="Handbooks">
        <Handbooks handbooks={this.state.handbooks} />
      </div>
    );
  }
}

export default App;
