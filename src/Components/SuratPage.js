import React,{useEffect, useState} from "react";
import SurahList from './SurahList'

function SuratPage() {
    useEffect(() => {
        fetchSurat()
    },[])
    let [Surat, setSurat] = useState([]);
    let fetchSurat = async () => {
        const call = await fetch('http://api.alquran.cloud/v1/surah');
        const back = await call.json()
        setSurat(back.data)
    }
    return(
        <>
            {Surat.map(e => {
                return(
                    <SurahList latinName={e.englishName} arabicName={e.name} number={e.number} type={e.revelationType} numberOfAyats={e.numberOfAyahs} />
                )
            })}
        </>
    )
}
export default SuratPage;