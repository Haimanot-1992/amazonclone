import React, { useContext, useState } from "react";
import {
  Search,
  ShoppingCart,
  MapPin,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";
const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  console.log(basket.length);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Electronics",
    "Computers",
    "Smart Home",
    "Arts & Crafts",
    "Automotive",
    "Baby",
    "Beauty",
    "Books",
    "Women's Fashion",
    "Men's Fashion",
    "Health & Household",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching:", searchQuery);
    }
  };

  return (
    <>
      <section className={styles.fixed}>
        {/* Top Navigation */}
        <div className={styles.headerTop}>
          <div className={styles.headerTopContainer}>
            <div className={styles.headerTopLeft}>
              <Link to="/" className={styles.headerLink}>
                <div className={styles.logo}>
                  <span className={styles.logoText}>amazon</span>
                </div>
              </Link>
              <div className={styles.headerLocation}>
                <MapPin size={18} />
                <div className={styles.locationText}>
                  <span className={styles.deliverTo}>Deliver to</span>
                  <span className={styles.country}>Ethiopia</span>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <form className={styles.headerSearch} onSubmit={handleSearch}>
              <select className={styles.searchSelect}>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search Amazon"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className={styles.searchButton}>
                <Search size={20} />
              </button>
            </form>

            {/* Right Navigation */}
            <div className={styles.headerRight}>
              <div className={styles.order_container}>
                <Link to="" className={styles.language}>
                  <img
                    src="https://www.shutterstock.com/shutterstock/photos/2376156903/display_1500/stock-photo-american-usa-flag-beautifully-waving-wave-american-flag-national-pride-of-united-states-america-2376156903.jpg"
                    alt=""
                  />
                  <select name="" id="">
                    <option value="">EN</option>
                  </select>
                </Link>
              </div>
              <Link to={!user && "/auth"}>
                <div>
                  {user ? (
                    <>
                      <p>Hello {user?.email?.split("@")[0]}</p>
                      <span onClick={() => auth.signOut()}>Sign Out</span>
                    </>
                  ) : (
                    <div
                      className={styles.headerAccount}
                      style={{ listStyle: "none !important" }}
                    >
                      <span className={styles.accountLine1}>
                        Hello, sign in <ChevronDown size={12} />
                      </span>
                      <span className={styles.accountLine}>
                        Account & Lists
                      </span>
                    </div>
                  )}
                </div>
              </Link>

              <Link to="/order">
                <div
                  className={styles.headerOrders}
                  style={{ listStyle: "none !important" }}
                >
                  <span className={styles.ordersLine1}>Returns</span>
                  <span className={styles.ordersLine2}>& Orders</span>
                </div>
              </Link>
              <Link to="/cart" className={styles.headerCart}>
                <div className={styles.cartIcon}>
                  <ShoppingCart size={32} />
                  <span className={styles.cartCount}>{basket.length}</span>
                </div>
                <span className={styles.cartText}>Cart</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={styles.mobileMenuButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className={styles.headerCategories}>
          <div className={styles.categoriesContainer}>
            <button className={styles.allCategories}>
              <Menu size={20} />
              <span>All</span>
            </button>
            <Link to="/" className={styles.categoryLink}>
              Today's Deals
            </Link>
            <Link to="/" className={styles.categoryLink}>
              Customer Service
            </Link>
            <Link to="/" className={styles.categoryLink}>
              Registry
            </Link>
            <Link to="/" className={styles.categoryLink}>
              Gift Cards
            </Link>
            <Link to="/" className={styles.categoryLink}>
              Sell
            </Link>
            {/* <Link to="/" className={styles.categoryLink}>
            Electronics
          </Link>
          <Link to="/" className={styles.categoryLink}>
            Fashion
          </Link> */}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuContent}>
              <div className={styles.mobileAccount}></div>
              <div className={styles.mobileCategories}>
                <h3>Shop by Department</h3>
                {categories.map((cat) => (
                  <Link key={cat} to="/auth" className={styles.mobileCategory}>
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Header;
