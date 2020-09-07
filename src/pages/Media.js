import React, { Component } from 'react';
import MediaCard from '../components/MediaCard';
import blindcode from '../images/blindcode.jpeg';
import heroku from '../images/heroku.png';
import helloworld from '../images/helloworld.jpg';
import heroku2 from '../images/heroku2.jpg';

class Media extends Component {
    render () {
        return (
            <div className="MediaPage">
                <h1>Check Out Some Things I've Been Involved In</h1>
                <h2>Articles I've Written</h2>
                <div className="blog-container">
                    <MediaCard 
                        title='How the Words "Hello World" Changed My Life Forever'
                        site="https://medium.com/@ladyleahmattern/how-the-words-hello-world-changed-my-life-forever-ac2bd8432159?source=friends_link&sk=464c0435964c15dc509016e9100c6988"
                        image={helloworld}
                        description=""
                    />
                    <MediaCard 
                        title="On Learning to Code as a Visually Impaired Human"
                        subTitle="Scratching the surface on what it is like to participate in the visual world of coding as a visual learner with a visual impairment."
                        site="https://levelup.gitconnected.com/on-learning-to-code-as-a-visually-impaired-human-1e1ea5a56be4?source=friends_link&sk=3f3a97e4e00ac9a024c2f5ad4c960871"
                        image={blindcode}
                        description=""
                    />
                    <MediaCard 
                        title="Heroku and You"
                        subTitle="A step by step guide to deploying full stack Rails and React applications to Heroku."
                        site="https://medium.com/@ladyleahmattern/heroku-and-you-5b5ffd759c26?source=friends_link&sk=00d0c07c5aed8458529a4d552429cd66"
                        image={heroku2}
                        description=""
                    />
                </div>
                <h2>Videos I've Participated In</h2>
                <div className="video-container">
                    <MediaCard 
                        title=""
                        subTitle=""
                        site=""
                        image=""
                        description=""
                    />
                </div>
            </div>
        )
    }
}

export default Media;