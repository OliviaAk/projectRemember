import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export default Layout;
Layout.propTypes = {
  children: PropTypes.element,
};
Layout.defaultProps = {
  children: React.element,
};
