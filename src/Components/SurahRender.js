import React,{useEffect, useState} from 'react';
import SurahNameCard from './SurahNameCard';
import AyahList from './AyahList';


function SurahRender({match}) {
    useEffect(() => {
        fetchSurah()
    },[])

    let [Ayah, setAyah] = useState([]);
    let fetchSurah = async () => {
        const url = await fetch(`http://api.alquran.cloud/v1/surah/${match.params.id}/ar.alafasy`)
        const response = await url.json();
        setAyah(response.data)
    }

    return(
        <>
            <SurahNameCard props={Ayah} />
            {Ayah.ayahs && Ayah.ayahs.map(e => {
                return(
                    <AyahList props={e} />
                )
            })}
            {!Ayah.ayahs && <h1>loading</h1>}
        </>
    )
}

export default SurahRender;