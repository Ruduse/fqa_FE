
import Header from '~/components/rac/header';
import Footer from '~/components/rac/footer';
import SideBar from '~/components/rac/SideBar';
import { useLocation } from 'react-router-dom';

function DefaultLayout({ children }) {
  const pathCurrentPage = useLocation;
  return (
    <div >
      <Header />
      <div style={{ width: "100%", display: 'flex', gap: '30px' }}>
        <SideBar pathCurrentPage={pathCurrentPage} />

        {children}

      </div>
      <Footer />

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
