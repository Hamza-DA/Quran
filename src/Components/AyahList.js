import React, {useState} from 'react';
import styled from 'styled-components';
import PlayButton from './icons/PlayButton';


const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`
const ListItem = styled.div`
    padding: 20px 15px;
    margin: 0 30px;
    border-bottom: #CAD5D7 solid 1px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: right;
    align-items: flex-end;
`
const Text = styled.p`
    display: inline-block;
    font-family: Arial;
    font-weight: 500;
    font-size: 22px;
    margin: 0 15px;
    color: #10585b;
`
const NumberICN = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 5px;
    margin: 0 0 20px 15px;
    box-shadow: 0px 11px 19px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: 30px;
    min-width: 30px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 143.5%;
    color: #4F4F4F;
`
const ButtonICN = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 5px;
    margin: 0 0 20px 15px;
    box-shadow: 0px 11px 19px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: 30px;
    min-width: 30px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 143.5%;
    color: #4F4F4F;
    border: none;
`

function AyahList({props}) {
    let [Audio, setAudio] = useState('')
    return(
        <>
            <ListItem>
                {/* <IconNumber number={props.numberInSurah} /> */}
                <FlexRow>
                    <ButtonICN onClick={() => {setAudio(props.audio)}}><PlayButton src={Audio} /></ButtonICN>
                    <NumberICN>{props.numberInSurah}</NumberICN>
                </FlexRow>
                <audio src={Audio}  autoPlay />
                <Text>
                    {props.text}
                </Text>
            </ListItem>
        </>
    )
}

export default AyahList;