import React, { useState } from "react";
import styled from "styled-components";
import Quba from "./icons/Quba";
import Menu from "./icons/Menu";
import Bar from "./icons/Bar";
import { Link } from "react-router-dom";
import BackButton from "./icons/BackButton";

const MenuWrapper = styled.div`
  display: flex;
`;
const BarWrapper = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;
const Wrapper = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #eaf8fa;
  z-index: 3;
  box-shadow: 0px 11px 19px rgba(0, 0, 0, 0.05);
`;
// bottom:${!open ? '-100%' : '0'};
const Header = ({ title }) => {
  const [open, setOpen] = useState(false);
  const Sidebar = styled.div`
    background-color: #fff;
    position: fixed;
    z-index: 2;
    animation: 2s fadeIn linear;
    transition: visibility 1s linear;
    left: 0;
    right: 0;
    bottom: 0;
    width: 90vw;
    height: 50%;
    margin: 0 20px;
    border-radius: 30px 30px 0 0;
    box-shadow: -4px 0px 19px 0px rgba(0, 0, 0, 0.05);
  `;

  return (
    <Wrapper>
      {/* <Link to="/"><Quba /></Link> */}
      <BackButton title={title} />

      {/* <MenuWrapper
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Menu clicked={open} />
      </MenuWrapper>

      <Sidebar
        style={{
          transition: ".2s ease all",
          transform: `translate(0, ${open ? "0" : "100"}%)`,
        }}
      >
        <BarWrapper>
          <Bar />
        </BarWrapper>
      </Sidebar> */}
    </Wrapper>
  );
};

export default Header;
