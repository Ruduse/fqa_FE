import React from 'react';
import './styles.scss'
import { CiBookmark } from "react-icons/ci";
import Personal from '~/components/atoms/Personal';
import images from '~/assets/images';
function Card(props) {
    return (
        <div className='card'>
            <Personal img={images.logo} title={'An An'} />
        </div>
    );
}

export default Card;