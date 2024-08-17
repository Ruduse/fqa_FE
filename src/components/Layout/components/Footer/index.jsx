// import '~/css/footer.css';
import styles from '~/css/footer.module.scss';
import classNames from 'classnames/bind';

import images from '~/assets/images/index.jsx'; // Đường dẫn ảnh cần tùy chỉnh
const cx = classNames.bind(styles);
const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('container')}>
        <div className={cx('footer-content')}>
          <div className={cx('footer-logo')}>
            <img src={images.logo} alt={cx('FQA.vn')} className={cx('footer-logo-img')} />
            <p>
              FQA.vn Nền tảng kết nối cộng đồng hỗ trợ giải bài tập học sinh trong khối K12. Sản phẩm được phát triển
              bởi CÔNG TY TNHH CÔNG NGHỆ GIA ĐÌNH (FTECH CO., LTD)
            </p>
            <ul className={cx('contact-info')}>
              <li>
                <i className={cx('fas fa-phone')}></i> Điện thoại: 1900636019
              </li>
              <li>
                <i className={cx('fas fa-envelope')}></i> Email: info@fqa.vn
              </li>
              <li>
                <i className={cx('fas fa-map-marker-alt')}></i> Địa chỉ: Số 21 Ngõ Giếng, Phố Đông Các, Phường Ô Chợ
                Dừa, Quận Đống Đa, Thành phố Hà Nội, Việt Nam.
              </li>
            </ul>
          </div>
          <div className={cx('footer-links')}>
            <h4>LIÊN KẾT</h4>
            <ul>
              <li>Hỏi đáp bài tập</li>
              <li>Giải bài tập SGK</li>
              <li>Cẩm nang</li>
              <li>Đề ôn luyện</li>
            </ul>
          </div>
          <div className={cx('footer-support')}>
            <h4>HỖ TRỢ</h4>
            <ul>
              <li>Điều khoản & chính sách</li>
              <li>Sitemap</li>
              <li>Liên hệ</li>
              <li>Hướng dẫn sử dụng</li>
              <li>Đánh giá và góp ý</li>
              <li>Dịch vụ FQA media</li>
            </ul>
          </div>
          <div className={cx('footer-social')}>
            <h4>TÌM CHÚNG TÔI TRÊN</h4>
            <ul className={cx('social-links')}>
              <li>Fanpage FQA</li>
              <li>Fanpage FQA+</li>
              <li>Group FQA</li>
              <li>Tiktok FQA+</li>
              <li>Youtube FQA Official</li>
            </ul>
            <div className={cx('footer-app-links')}>
              <h5>Tải ứng dụng FQA</h5>
              <img src={cx('/path-to-appstore-logo.png')} alt={cx('App Store')} />
              <img src={cx('/path-to-googleplay-logo.png')} alt={cx('Google Play')} />
            </div>
          </div>
        </div>
        <div className={cx('footer-bottom')}>
          <p>
            Người chịu trách nhiệm quản lý nội dung: Nguyễn Tuấn Quang <br />
            Giấy phép thiết lập MXH số 07/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 05/01/2024
          </p>
          <p>Copyright © 2023 fqa.vn All Rights Reserved</p>
        </div>
        <div className={cx('footer-keywords')}>
          <ul>
            <li>Chat GPT Timi</li>
            <li>Google Dịch</li>
            <li>Máy tính Casio</li>
            <li>Bảng tuần hoàn</li>
            <li>Hoidap247</li>
            <li>trường tư thục tốt nhất ở tphcm</li>
            <li>Giải bài tập toán lớp 8</li>
            <li>luyện tiếng anh lớp 10</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
