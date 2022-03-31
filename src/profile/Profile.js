import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import './Profile.css'



function Profile(props) {
  return (
    <div className='Profile'>
        <div className='headProfile'>
          <span>{props.children}</span>
          <div className='titles'>
            <h1 className='userName'>{props.fullName}</h1>
            <h3 className='bio'>{props.bio}</h3>
          </div> 
        </div>
        <p className='description'>{props.description}</p>
        
        <Button onClick={props.handleName}>welcome</Button>
    </div>
  )
}

Profile.defaultProps = {
  fullName : "User Name",
  bio : "web developer",
  description : "Web developers design and build websites. They are typically responsible for the appearance, of the site and technical aspects, such as site speed and how much traffic the site can handle. Web developers may also create site content that requires technical features." 
}

Profile.propTypes = {
  fullName : PropTypes.string,
  bio : PropTypes.string,
  description : PropTypes.string,
}
export default Profile;