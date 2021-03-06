import React from "react";
import styled from "styled-components";
const NumberHolder = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NumberIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconNumber = (props) => {
  const NumberText = styled.p`
    position: absolute;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 143.5%;
    color: ${props.color ? props.color : "#4F4F4F"};
  `;

  return (
    <NumberHolder>
      <NumberIcon>
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.94814 14.6498C5.94814 15.0987 5.76987 15.5292 5.4525 15.8465L0.495648 20.8033C-0.165216 21.4642 -0.165216 22.5358 0.495648 23.1966L5.4525 28.1535C5.76987 28.4708 5.94814 28.9013 5.94814 29.3502V36.3597C5.94814 37.2943 6.70585 38.052 7.64049 38.052H14.6501C15.0989 38.052 15.5294 38.2304 15.8468 38.5477L20.8033 43.5043C21.4642 44.1652 22.5357 44.1652 23.1967 43.5043L28.1532 38.5477C28.4706 38.2304 28.9011 38.052 29.3499 38.052H36.3598C37.2945 38.052 38.0522 37.2943 38.0522 36.3597V29.3497C38.0522 28.9009 38.2304 28.4705 38.5478 28.1531L43.5043 23.1966C44.1652 22.5358 44.1652 21.4642 43.5043 20.8033L38.5478 15.8469C38.2304 15.5295 38.0522 15.0991 38.0522 14.6502V7.64034C38.0522 6.70567 37.2945 5.948 36.3598 5.948H29.35C28.9012 5.948 28.4707 5.76969 28.1533 5.45232L23.1967 0.495667C22.5357 -0.165222 21.4642 -0.165222 20.8033 0.495667L15.8467 5.45232C15.5293 5.76969 15.0989 5.948 14.65 5.948H7.64049C6.70585 5.948 5.94814 6.70567 5.94814 7.64034V14.6498ZM1.69234 22L6.64914 17.0432C7.28387 16.4084 7.64049 15.5475 7.64049 14.6498V7.64034H14.65C15.5476 7.64034 16.4086 7.28374 17.0433 6.64899L22 1.69233L26.9567 6.64899C27.5914 7.28374 28.4523 7.64034 29.35 7.64034H36.3598V14.6502C36.3598 15.5479 36.7165 16.4088 37.3512 17.0435L42.3076 22L37.3512 26.9564C36.7165 27.5912 36.3598 28.4521 36.3598 29.3497V36.3597H29.3499C28.4523 36.3597 27.5913 36.7163 26.9566 37.351L22 42.3076L17.0434 37.351C16.4087 36.7163 15.5477 36.3597 14.6501 36.3597H7.64049V29.3502C7.64049 28.4525 7.28387 27.5916 6.64914 26.9568L1.69234 22Z"
            fill={props.color ? props.color : "#11585B"}
          />
        </svg>
      </NumberIcon>

      <NumberText>{props.number}</NumberText>
    </NumberHolder>
  );
};

export default IconNumber;
