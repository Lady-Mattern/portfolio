import React, { Component } from 'react';
import leah from '../images/leah.jpg';

class About extends Component {
    render () {
        return (
            <div>
                <img id="profile-photo" src={leah} alt="Leah's portrait with a forest background. Leah is smiling. She has short brown hair. Leah is wearing blue rimmed glasses and a brown high collar jacket." />
                <h1>About Me</h1>
                <p>
                    Hello World.
                </p>
                <p> 
                    My name is Leah Mattern. 
                    I was born and raised in Southern Idaho in a small town called Emmett. 
                    As a military spouse, I have had the privilege to live all over the country and experience many different cultures. 
                </p>
                <p>
                    I got my start in life as a Music Educator. I worked publicly and privately for five years in classroom settings and as a private studio instructor for over ten years. 
                    My mobile lifestyle made working as a public school teacher impractical so I went in search of another profession that would challenge me both analytically and creatively.
                    As fate would have it, a friend introduced me to the world of code via freeCodeCamp's online curriculum and thus, a Software Engineer was born!
                </p>
                <p>
                    Now I've completed both NuCamp's HTML, CSS and JavaScript program as well as General Assembly's Software Engineering Immersive Bootcamp
                </p>
            </div>            
        )
    }
}

export default About;