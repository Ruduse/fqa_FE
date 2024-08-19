import React from 'react';
import './styles.scss'
import images from '~/assets/images';
import Carousel from '../Carousel';
import { carousels } from '~/fakes';
import { SwiperSlide } from 'swiper/react';
import { questions } from '~/fakes/question';
function HardQuestion(props) {
    return (
        <div className='question' >
            <div className="question_label">
                <img src={images.hard_question} alt="" />
                Câu hỏi khó
            </div>
            <div className="question_list">
                <Carousel perview={4} space={30}>
                    {questions.map((item, index) => (
                        <SwiperSlide>
                            <a href={item.href} className="question_item">
                                <img key={index} src={item.icon} alt="" />
                                <p>{item.title}</p>
                            </a>
                        </SwiperSlide>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default HardQuestion;