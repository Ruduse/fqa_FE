import React from 'react';
import BreadCrum from '../BreadCrum';
import { breadCrumd } from '~/fakes';
import { MdKeyboardArrowRight } from "react-icons/md";
import './styles.scss'
import images from '~/assets/images';
import Button from '~/components/atoms/Button';
function BoxContent({ currentPage, title, context, onAction }) {
    return (
        <div className="container_box">
            <div className='boxcontent'>
                <div>
                    <BreadCrum listCrumb={breadCrumd} />
                </div>
                <p className='boxcontent_title'>
                    {title}
                </p>
                <p className='boxcontent_context'>
                    {context}
                </p>
                <div className="boxcontent_btn">
                    <Button title={'Đặt câu hỏi ngay'} type={'large'} tailIcon={<MdKeyboardArrowRight />} />
                </div>
            </div>
            <img src={images.bg_content} alt="" />
        </div>
    );
}

export default BoxContent;