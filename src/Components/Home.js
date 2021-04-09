import { React } from "react";
import styled from "styled-components";
import Wave from "./icons/Wave";
import Surah from "./icons/Surah";
import Quran from "./icons/Quran";
import Start from "./icons/Start";
import { Link } from "react-router-dom";
import Patterns from "./icons/Patterns";
import Header from "./Header";

const StartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 40px 0;
  justify-content: center;
`;
const GridWrapper = styled.div`
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;
const GridCard = styled.div`
  grid-area: ${(props) => props.area};
  height: ${(props) => props.height}px;
  background: linear-gradient(${(props) => props.background});
  border-radius: 30px;
  padding: 20px;
  overflow: hidden;
  position: relative;
`;
const WaveHolder = styled.span`
  position: absolute;
  left: ${(props) => props.posX};
  bottom: ${(props) => props.posY};
  overflow: hidden;
  opacity: 0.5;
  z-index: 2;
`;
const FloatRight = styled.div`
  position: absolute;
  right: 20px;
`;
const FloatLeft = styled.div`
  position: absolute;
  left: 20px;
  bottom: 10px;
`;
const Customh4 = styled.h4`
  font-size: 19px;
  font-weight: 800;
  line-height: 27px;
  text-align: left;
  color: #fff;
`;
const Customh6 = styled.h6`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  color: #fff;
  opacity: 0.6;
  margin-top: -5px;
`;

const Home = () => {
  return (
    <>
      <Header />

      <StartWrapper>
        <Start />
      </StartWrapper>

      <GridWrapper>
        <GridCard
          height={"150"}
          area={"1 / 1 / 2 / 3"}
          background={"81.24deg, #26B2AF 0%, #51E87E 100%"}
        >
          <WaveHolder posX={"-30px"} posY={"-20px"}>
            <Wave />
          </WaveHolder>
          <Patterns />
          <FloatRight>
            <Surah />
          </FloatRight>
          <FloatLeft>
            <Customh4>Surah of the day</Customh4>
          </FloatLeft>
        </GridCard>

        <GridCard
          height={"200"}
          area={"2 / 1 / 4 / 2"}
          background={"210.37deg, #CE7EB2 0%, #9D256E 100%"}
        >
          <Patterns />
          <WaveHolder posX={"-100px"} posY={"-20px"}>
            <Wave />
          </WaveHolder>
        </GridCard>

        <Link to="/surat">
          <GridCard
            height={"200"}
            area={"2 / 2 / 4 / 3"}
            background={"210.37deg, #B383D1 0%, #7E25B6 100%"}
          >
            <Patterns />
            <WaveHolder posX={"-100px"} posY={"-20px"}>
              <Wave />
            </WaveHolder>
            <FloatRight>
              <Quran />
            </FloatRight>
            <FloatLeft>
              <Customh4>Quran</Customh4>
              <Customh6>Go to</Customh6>
            </FloatLeft>
          </GridCard>
        </Link>
      </GridWrapper>
    </>
  );
};

export default Home;
