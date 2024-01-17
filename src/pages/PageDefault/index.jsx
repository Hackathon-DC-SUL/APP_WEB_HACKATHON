import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import MenuSideBar from "../../components/MenuSideBar";

import "./PageDefault.css"

export default function PageDefault() {
  return (
    <>
      <Header />
      <main>
        <MenuSideBar />
        <Outlet />
      </main>
    </>
  )
}