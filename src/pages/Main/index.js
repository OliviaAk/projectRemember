import React from "react";
import Info from "../../components2/Home/Info";
import About from "../../components2/Home/About";
import Items from "../../components2/Home/Items";
import Description from "../../components2/Home/Description";


import Layout from "../../layouts2";
export default function HomePage() {

  return (
    <>
    <Layout>
      <Info /> 
      <About/>
      <Items /> 
      <Description /> 

    </Layout>
    </>
  );
}
