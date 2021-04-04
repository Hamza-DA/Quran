import React from 'react';
import styled from 'styled-components';
import IconNumber from './icons/IconNumber'

const ListItem = styled.div`
    padding: 15px;
    margin: 0 30px;
    border-bottom: #CAD5D7 solid 1px;
    display: flex;
    justify-content: space-between;
`
const Names = styled.div`
    padding: 0 0 0 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const LatinType = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ArabicType = styled.h4`
    font-family: KFGQPC Uthmanic Script HAFS;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 143.5%;
    display: flex;
    align-items: center;
    text-align: right;
    color: #1F6266;
    margin: 0 !important;
`
const LatinName = styled.h5`
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 19px;
    line-height: 143.5%;
    display: flex;
    align-items: center;
    color: #11585B;
`
const LatinVerses = styled.p`
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 143.5%;
    display: flex;
    align-items: center;
    color: #11585B;
    opacity: 0.3;
`



function SurahList({latinName, arabicName, number, type, numberOfAyats}) {
    return(
        <>
        <ListItem>
             <IconNumber number={number} />
            <Names>
                <LatinType>
                    <LatinName>{latinName}</LatinName>
                    <LatinVerses>{`${type}, ${numberOfAyats} ayats`}</LatinVerses>
                </LatinType>

                <ArabicType>
                    {arabicName}
                </ArabicType>
            </Names>
        </ListItem>
        </>
    )
}

export default SurahList;