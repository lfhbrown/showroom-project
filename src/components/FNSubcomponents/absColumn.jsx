// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const absColumnDiv = styled.div`
  display: flex;
  text-align: center;
  align-content: center;
  flex-direction: column;
  /* border: 1px solid black; */

  ul {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 0; /* Remove default margins */
    padding: 0; /* Remove default padding */
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #595959;
  }
`;
// eslint-disable-next-line react-refresh/only-export-components
const FooterLink = styled.a`
  &:hover {
    border-bottom: solid 1px;
  }
  &:hover address {
    border-bottom: solid 1px;
  }
`;
const absColumn = ({ h2Text, li1, li2, li3, li4, li5 }) => {
  return (
    <absColumnDiv>
      <h2>{h2Text}</h2>
      <ul>
        <li>
          <FooterLink href="">{li1}</FooterLink>
        </li>
        <li>
          <FooterLink href="">{li2}</FooterLink>
        </li>
        <li>
          <FooterLink href="">{li3}</FooterLink>
        </li>
        <li>
          <FooterLink href="">{li4}</FooterLink>
        </li>
        <li>
          <FooterLink href="">{li5}</FooterLink>
        </li>
      </ul>
    </absColumnDiv>
  );
};

absColumn.propTypes = {
  h2Text: PropTypes.string,
  li1: PropTypes.string,
  li2: PropTypes.string,
  li3: PropTypes.string,
  li4: PropTypes.string,
  li5: PropTypes.string,
};

export default absColumn;
