import { useDispatch } from "react-redux";
import "./Header.scss";

import { useEffect } from "react";
import { getLoggedUser } from "../../features/user/userSlice";
import Navbar from "./Navbar/Navbar";

const Header = ({ onSearchTypeChange, searchType }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoggedUser());
  }, [dispatch]);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Header;
