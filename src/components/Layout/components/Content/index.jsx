import styles from '~/css/footer.module.scss';
import classNames from 'classnames/bind';

import images from '~/assets/images/index.jsx'; // Đường dẫn ảnh cần tùy chỉnh
const cx = classNames.bind(styles);
function Content() {
  return <div className={cx('content')}></div>;
}

export default Content;
