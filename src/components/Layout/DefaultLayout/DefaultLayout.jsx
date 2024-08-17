import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
// import Sidebar from '~/components/Layout/components/Sidebar';

import styles from './DefaultLayout.module.scss';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />

      <div className={cx('container')}>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;

{
  /* <div className={cx('container1')}>
  <Sidebar />
  <div className={cx('content')}>{children}</div>
</div>; */
}
