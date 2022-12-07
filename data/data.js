export const gameIcons = [
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

export const getNewArray = () => {
  return gameIcons.sort(() => Math.random() - 0.5);
};

export const resetArray = () => {
  return gameIcons
    .sort(() => Math.random() - 0.5)
    .map((obj) => {
      return { ...obj, vis: false, permaVis: false };
    });
};
