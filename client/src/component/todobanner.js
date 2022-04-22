import React from 'react';
import { Outlet } from "react-router-dom";

export const TodoBanner = () => (
  <>
    <h1 className="text-center title-bar text-secondary"><span className="text-warning"><i className="fas fa-list"></i></span>{"    <ToDo ... ... ... />"}</h1>
    <Outlet />
  </>
)

export default TodoBanner;