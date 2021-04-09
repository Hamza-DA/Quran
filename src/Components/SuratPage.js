import React, { useEffect, useState } from "react";
import SurahList from "./SurahList";
import { Link } from "react-router-dom";
import Loading from "./icons/Loading";
import { motion } from "framer-motion";
import Header from "./Header";

function SuratPage() {
  useEffect(() => {
    fetchSurat();
  }, []);
  let [Surat, setSurat] = useState([]);
  let fetchSurat = async () => {
    const call = await fetch("http://api.alquran.cloud/v1/surah");
    const back = await call.json();
    setSurat(back.data);
  };
  return (
    <>
      <Header title={"Quran"} />
      <motion.div>
        {Surat &&
          Surat.map((e, index) => {
            return (
              <Link key={e.number} to={`/surat/${e.number}`}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: index * 0.08, duration: 0.5 },
                  }}
                >
                  <SurahList
                    key={e.number}
                    latinName={e.englishName}
                    arabicName={e.name}
                    number={e.number}
                    type={e.revelationType}
                    numberOfAyats={e.numberOfAyahs}
                  />
                </motion.div>
              </Link>
            );
          })}
        {!Surat.length && <Loading />}
      </motion.div>
    </>
  );
}
export default SuratPage;
