import React, {Component} from 'react';
import Globals from '../utils/Globals';
import axios from 'axios';

import Evento from './Evento';

import { css } from 'glamor';

const cont = css({
  width: '100%',
  maxWidth: '1100px',
  border: 'none',
  marginTop: 60,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  color: Globals.colors.gray,
})

class EventList extends Component {
    state = { events: [] }

    componentDidMount = () => {
      this.getNews();
    };

     getNews = () => {
        axios.get('http://localhost:8000/api/event')
          .then(response => {
            this.setState({events: response.data})
         })
         .catch(function (error) {
           console.log(error);
       });
    };

    moreItems = () => this.setState({ numbers: this.state.numbers + 10 });

    render() {
      const { events } = this.state;

      return (
        <div className={cont}>
          {events.map((event, key) => {
              return <Evento key={event._id} event={event} />;
          })}

        </div>
      );
  }
}

export default EventList;
