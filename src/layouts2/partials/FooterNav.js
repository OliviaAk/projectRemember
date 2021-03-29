import React from 'react';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className
}) => {



  return (
    <nav
      className={className}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Контакты</Link>
        </li>
        <li>
          <Link to="#0">О нас</Link>
        </li>
        <li>
          <Link to="#0">Вопросы</Link>
        </li>
        <li>
          <Link to="#0">Поддержка</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;