import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images/index.jsx'; // Đường dẫn ảnh cần tùy chỉnh

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="FQA.vn" />
        </div>

        <div className={cx('actions')}>
          <a href="#qa" className={cx('link')}>
            <img src={images.hoidap} alt="QA" className={cx('icon')} />
            Hỏi đáp bài tập
          </a>
          <a href="#solution" className={cx('link')}>
            <img src={images.giaibaitap} alt="solution" className={cx('icon')} />
            Giải bài tập SGK
          </a>
          <a href="#guide" className={cx('link')}>
            <img src={images.camnang} alt="guide" className={cx('icon')} />
            Cẩm nang học tập
          </a>
          <a href="#practice" className={cx('link')}>
            <img src={images.onluyen} alt="practice" className={cx('icon')} />
            Ôn luyện
          </a>
          <a href="#tutor" className={cx('link')}>
            <img src={images.dangkygiasu} alt="tutor" className={cx('icon')} />
            Đăng ký học gia sư
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
