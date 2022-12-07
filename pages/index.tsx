import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const gameIcons = [
  { icon: "🎂", number: 0, vis: false, permaVis: false },
  { icon: "🎂", number: 0, vis: false, permaVis: false },
  { icon: "🍫", number: 1, vis: false, permaVis: false },
  { icon: "🍫", number: 1, vis: false, permaVis: false },
  { icon: "🍭", number: 2, vis: false, permaVis: false },
  { icon: "🍭", number: 2, vis: false, permaVis: false },
  { icon: "🍼", number: 3, vis: false, permaVis: false },
  { icon: "🍼", number: 3, vis: false, permaVis: false },
  { icon: "🪔", number: 4, vis: false, permaVis: false },
  { icon: "🪔", number: 4, vis: false, permaVis: false },
  { icon: "🍺", number: 5, vis: false, permaVis: false },
  { icon: "🍺", number: 5, vis: false, permaVis: false },
  { icon: "🐱", number: 6, vis: false, permaVis: false },
  { icon: "🐱", number: 6, vis: false, permaVis: false },
  { icon: "🐶", number: 7, vis: false, permaVis: false },
  { icon: "🐶", number: 7, vis: false, permaVis: false },
];

export default function Home() {
  const [vis, setVis] = useState([]);
  const [gameState, setGameState] = useState(gameIcons);

  const onReveal = (i: number) => {
    const newGameState = [...gameState];
    const visOne = newGameState.find((obj) => obj.vis === true);
    const visOneIndex = newGameState.findIndex((obj) => obj === visOne);
    console.log(visOne);
    newGameState[i].vis = true;

    if (visOne?.number === newGameState[i].number) {
      newGameState[i].permaVis = true;
      newGameState[visOneIndex].permaVis = true;
    }

    if (!visOne) {
      setGameState(newGameState);
      return;
    }

    if (visOne) {
      setGameState(newGameState);
      setTimeout(() => {
        const clearGameState = [...newGameState];
        clearGameState[i].vis = false;
        clearGameState[visOneIndex].vis = false;
        setGameState(clearGameState);
        return;
      }, 7000);
    }
  };

  console.log(gameState);

  return (
    <div className={styles.container}>
      <Head>
        <title>Memory by DanGoer</title>
        <meta name="description" content="Created by DanGoer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {gameState.map((icon, i) => {
          return icon.permaVis ? (
            <div key={icon.icon + i}>{icon.icon}</div>
          ) : icon.vis ? (
            <div key={icon.icon + i}>{icon.icon}</div>
          ) : (
            <div onClick={() => onReveal(i)}>o</div>
          );
        })}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
