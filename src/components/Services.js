import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free Cocktails',
                info: 'Est voluptate excepteur dolor Lorem reprehenderit labore esse.Quis qui minim Lorem id ut cupidatat ipsum.'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Est voluptate excepteur dolor Lorem reprehenderit labore esse.Quis qui minim Lorem id ut cupidatat ipsum.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: 'Est voluptate excepteur dolor Lorem reprehenderit labore esse.Quis qui minim Lorem id ut cupidatat ipsum.'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info: 'Est voluptate excepteur dolor Lorem reprehenderit labore esse.Quis qui minim Lorem id ut cupidatat ipsum.'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='Services' />
                <div className='services-center'>
                    {this.state.services.map((item, index) => (
                        <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    ))}
                </div>
            </section>
        )
    }
}
