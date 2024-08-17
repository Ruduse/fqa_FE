import React from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <div className={`${styles.historyTag} ${styles.link}`}>
          <a href="/hoi-dap/lich-su-m54.html" className={styles.historyLink}>
            Lịch Sử
          </a>
        </div>
        <ul className={styles.list}>
          <li className={`${styles.listItem} ${styles.active}`}>
            <a href="/" aria-current="page" className={`${styles.listLink} ${styles.activeLink}`}>
              <img src="images/all-icon.svg" alt="Tất cả" className={styles.icon} />
              Tất cả
            </a>
          </li>
          <li className={`${styles.listItem} ${styles.link}`}>
            <a href="/hoi-dap/toan-hoc-m48.html" className={styles.listLink}>
              <img src="images/Group%2520%25285%2529.png" alt="Toán Học" className={styles.icon} />
              Toán Học
            </a>
          </li>
          {/* Repeat other list items similarly */}
        </ul>
        <div className={styles.banner}>
          <a href="/" target="_blank" rel="nofollow" className={styles.bannerLink}>
            <img src="images/campaign-sandiem1.jpg" alt="Ảnh ads" loading="lazy" blur="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
