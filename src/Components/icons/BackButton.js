import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
`;
const Title = styled.h2`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  color: #11585b;
  margin: 0;
  margin-left: 10px;
  line-height: 143.5%;
`;
const BackButton = (props) => {
  let history = useHistory();
  return (
    <>
      <Button
        onClick={() => {
          history.goBack();
        }}
      >
        <svg
          width="9"
          height="17"
          viewBox="0 0 9 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.70711 0.792893C9.09763 1.18342 9.09763 1.81658 8.70711 2.20711L2.41421 8.5L8.70711 14.7929C9.09763 15.1834 9.09763 15.8166 8.70711 16.2071C8.31658 16.5976 7.68342 16.5976 7.29289 16.2071L0.292893 9.20711C-0.0976311 8.81658 -0.0976311 8.18342 0.292893 7.79289L7.29289 0.792893C7.68342 0.402369 8.31658 0.402369 8.70711 0.792893Z"
            fill="#11585B"
          />
        </svg>
        {props.title && <Title>{props.title}</Title>}
      </Button>
      {console.log(props)}
    </>
  );
};

export default BackButton;
