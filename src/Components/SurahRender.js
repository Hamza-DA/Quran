import React, { useEffect, useState } from "react";
import SurahNameCard from "./SurahNameCard";
import AyahList from "./AyahList";
import Quba from "./icons/Quba";
import Loading from "./icons/Loading";
import { motion } from "framer-motion";
import Header from "./Header";

function SurahRender({ match }) {
  useEffect(() => {
    fetchSurah();
  }, []);

  let [Ayah, setAyah] = useState([]);
  let fetchSurah = async () => {
    const url = await fetch(
      `http://api.alquran.cloud/v1/surah/${match.params.id}/ar.alafasy`
    );
    const response = await url.json();
    setAyah(response.data);
  };

  return (
    <>
      <Header title={`${Ayah.englishName} ${Ayah.name}`} />
      {Ayah.ayahs && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <SurahNameCard props={Ayah} />
        </motion.div>
      )}
      {Ayah.ayahs &&
        Ayah.ayahs.map((e, index) => {
          return (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: index * 0.08, duration: 0.5 },
                }}
              >
                <AyahList props={e} />
              </motion.div>
            </>
          );
        })}
      {!Ayah.ayahs && <Loading />}
    </>
  );
}

export default SurahRender;
