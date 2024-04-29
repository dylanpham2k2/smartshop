import { memo, React, useState } from "react";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
import { ROUTERS } from "utils/router";

import { CiFacebook, CiInstagram, CiLinkedin, CiUser } from "react-icons/ci";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";

import "./style.scss";

const Header = () => {
  const [isShowCategories, setShowCategories] = useState(true);

  const [menus, setMenus] = useState([
    {
      name: " Trang chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: " Cửa hàng",
      path: ROUTERS.USER.PRODUCT,
    },
    {
      name: " Sản phẩm",
      path: "",
      isShowSubmenu: false,
      children: [
        {
          name: " Điện thoại",
          path: "",
        },
        {
          name: " Laptop",
          path: "",
        },
        {
          name: " Tablet",
          path: "",
        },
        {
          name: " Phụ kiện",
          path: "",
        },
        {
          name: " Smartwatch",
          path: "",
        },
        {
          name: " Đồng hồ",
          path: "",
        },
        {
          name: " Máy cũ, Thu cũ",
          path: "",
        },
        {
          name: "PC, Máy in",
          path: "",
        },
      ],
    },
    {
      name: " Bài viết",
      path: "",
    },
    {
      name: " Liên hệ",
      path: "",
    },
  ]);
  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-6 header__top_left">
              <ul>
                <li>
                  <AiOutlineMail />
                  phamhai2002@gmail.com
                </li>
                <li>Giao hàng miễn phí cho đơn từ {formatter(5000000)}</li>
              </ul>
            </div>
            <div className="col-6 header__top_right">
              <ul>
                <li>
                  <Link to={"/"}>
                    <CiFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <CiInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={""}>
                    <CiLinkedin />
                  </Link>
                </li>

                <li>
                  <Link to={""}>
                    <CiUser />
                  </Link>
                  <span>Đăng nhập</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="header__logo">
                <h1> SMART SHOP</h1>
              </div>
            </div>
            <div className="col-xl-6">
              <nav className="header__menu">
                <ul>
                  {menus?.map((menu, menuKey) => (
                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                      <Link to={menu?.path}>{menu?.name}</Link>
                      {menu.children && (
                        <ul className="header__menu__dropdown">
                          {menu.children.map((children, childKey) => (
                            <li key={`${menuKey} - ${childKey}`}>
                              <Link to={children.path}>{children.name}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="col-xl-3">
              <div className="header__cart">
                <div className="header__cart__price">
                  <span>{formatter(10000000)}</span>
                </div>
                <ul>
                  <li>
                    <Link to="#">
                      <HiOutlineShoppingCart />
                      <span>5</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row hero__categories_container">
          <div className="col-lg-3 hero__categories_all">
            <div className="hero__categories_title" onClick={() => setShowCategories(!isShowCategories)}>
              <IoMenu />
              Danh sách sản phẩm
            </div>
            {isShowCategories && (
              <ul className={isShowCategories ? "" : "hiden"}>
                <li>
                  <Link to="#">Điện thoại</Link>
                </li>
                <li>
                  <Link to="#">Laptop</Link>
                </li>
                <li>
                  <Link to="#">Tablet</Link>
                </li>
                <li>
                  <Link to="#">Phụ kiện</Link>
                </li>
                <li>
                  <Link to="#">Smartwatch</Link>
                </li>
                <li>
                  <Link to="#">Đồng hồ</Link>
                </li>
                <li>
                  <Link to="#">Máy cũ, thu cũ</Link>
                </li>
                <li>
                  <Link to="#">PC, máy in</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="col-lg-9 hero__search_conatiner">
            <div className="hero__search">
              <div className="hero__search__form">
                <form>
                  <input type="text" placeholder="Tìm kiếm sản phẩm" />
                  <button type="submit" className="site-btn">
                    Tìm kiếm
                  </button>
                </form>
              </div>
              <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                  <AiOutlinePhone />
                </div>
                <div className="hero__search__phone__text">
                  <p>0963305110</p>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            <div className="hero__item">
              <div className="hero__text">
                <span>Laptop HP Pavilion</span>
                <h2>Đảm bảo <br />
                  chất lượng
                </h2>
                <p> Miễn phí giao hàng tận nơi</p>
                <Link to=" " className="primary-btn"></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
