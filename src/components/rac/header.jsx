import images from '~/assets/images';
import '~/css/header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={images.logo} alt="FQA Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Hỏi đáp</a>
          </li>
          <li>
            <a href="/">Giải bài tập</a>
          </li>
          <li>
            <a href="/">Cẩm nang</a>
          </li>
          <li>
            <a href="/">Đề ôn luyện</a>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Tìm kiếm..." />
      </div>
    </header>
  );
}

export default Header;
