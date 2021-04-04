import React,{useEffect, useState} from "react";
import SurahList from './SurahList'
import {Link} from 'react-router-dom'

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
    const mapSurat = Surat.map(e => {
                return(
                    <Link to={`/surat/${e.number}`}>
                        <SurahList key={e.number} latinName={e.englishName} arabicName={e.name} number={e.number} type={e.revelationType} numberOfAyats={e.numberOfAyahs} />
                    </Link>
                )
            })
    return(
        <>
            {mapSurat}

        </>
    )
}
export default SuratPage;