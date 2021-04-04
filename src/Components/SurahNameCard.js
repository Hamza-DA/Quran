import React from 'react';
import BismiLah from './icons/BismiLah';
import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
`
const Inline = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`
const Info = styled.div`
    margin: 0 0 20px 0;
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 45px 60px;
    background: linear-gradient(81.24deg, #26B2AF 0%, #51E87E 100%);
    border-radius: 20px;
    filter: drop-shadow(0px 15px 22px rgba(24, 211, 159, 0.41)); 
`
const SurahTitleEnglish = styled.h1`
    display: inline-block;
    font-weight: 800;
    font-size: 19px;
    margin: 0 5px;
    color: #fff;
`
const SurahTitleArabic = styled.h1`
    display: inline-block;
    font-family: KFGQPC Uthmanic Script HAFS;
    font-weight: 800;
    font-size: 22px;
    margin: 0 5px;
    color: #fff;
`
const SurahSubTitle = styled.p`
    font-weight: 600;
    font-size: 12px;
    line-height: 143.5%;
    opacity: 0.8;
    color: #fff;
`
function SurahNameCard({props}) {
    return(
        <>
        <Wrapper>
            <Info>
                <Inline>
                    <SurahTitleEnglish>
                        {props.englishName}
                    </SurahTitleEnglish>
                    <SurahTitleArabic>
                        {props.name}
                    </SurahTitleArabic>
                </Inline>
                <SurahSubTitle>
                    {`${props.revelationType}, ${props.numberOfAyahs} verses`}
                </SurahSubTitle>
            </Info>
            <BismiLah />
        </Wrapper>

        </>
    )
}

export default SurahNameCard