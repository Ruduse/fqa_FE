import React from 'react';
import './styles.scss'
import Select from '~/components/atoms/Select';
import { selectClass } from '~/fakes';
import GroupButton from '~/components/atoms/GroupButton';
import { buttons } from '~/fakes/button';
import Card from '../Card';
function Answer(props) {
    return (
        <div className='answer'>
            <div className="answer_left">
                <div className="answer_top">
                    <div className="answer_select">
                        <p className=''>Chọn lớp</p>
                        <Select options={selectClass} />
                    </div>
                    <div className="answer_type">
                        <GroupButton listBtn={buttons} />
                    </div>
                </div>
                <p className='answer_question'>22,22333 câu hỏi</p>
                <Card />
            </div>
            <div className="answer_right">
                bg ri
            </div>
        </div>
    );
}

export default Answer;