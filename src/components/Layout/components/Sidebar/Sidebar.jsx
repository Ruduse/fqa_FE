import React from 'react';
import styles from '~/css/footer.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images/index.jsx';

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div className={cx('sidebar')}>
      <div className={cx('history-tag', 'link')}>
        <a href="/hoi-dap/lich-su-m54.html" className={cx('history-link')}>
          Lịch Sử
        </a>
      </div>

      <ul className={cx('subject-list')}>
        <li className={cx('subject-item', 'active')}>
          <a href="/" className={cx('subject-link')}>
            <img src={images.allIcon} alt="Tất cả" className={cx('subject-icon')} />
            Tất cả
          </a>
        </li>
        <li className={cx('subject-item')}>
          <a href="/hoi-dap/toan-hoc-m48.html" className={cx('subject-link')}>
            <img src={images.mathIcon} alt="Toán Học" className={cx('subject-icon')} />
            Toán Học
          </a>
        </li>
        <li className={cx('subject-item')}>
          <a href="/hoi-dap/vat-ly-m49.html" className={cx('subject-link')}>
            <img src={images.physicsIcon} alt="Vật Lý" className={cx('subject-icon')} />
            Vật Lý
          </a>
        </li>
        <li className={cx('subject-item')}>
          <a href="/hoi-dap/hoa-hoc-m50.html" className={cx('subject-link')}>
            <img src={images.chemistryIcon} alt="Hóa Học" className={cx('subject-icon')} />
            Hóa Học
          </a>
        </li>
        {/* Add more subject items here as needed */}
        <div className={cx('ads-container')}>
          <a href="/#" target="_blank" rel="nofollow noreferrer" className={cx('ads-link')}>
            <img src={''} alt="Ảnh ads" className={cx('ads-image')} />
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
