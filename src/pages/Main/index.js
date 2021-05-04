import React from 'react';
import Info from '../../components/Home/Info';
import About from '../../components/Home/About';
import Items from '../../components/Home/Items';
import Description from '../../components/Home/Description';
import Tape from '../../components/Tape';
import './Main.css';
import Layout from '../../layouts';

export default function HomePage() {
  return (
    <>
      <Layout>
        <Info />
        <div className="cover">
          <About />
          <Items />
          <Tape />
          <Description />
        </div>
      </Layout>
    </>
  );
}
