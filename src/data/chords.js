/*
  和弦按法数据

  chordData 是一个对象，每个键值对表示一个和弦，
  键是和弦名称（例如 F, G, C）
  值是一个对象，包含每根弦的按法，以及大横按等。

  position: 定义高把位和弦位置，
  例如： 4 
  表示： 和弦图从第4品开始

  chord: 定义每根弦的按法，
  例如： [[1, 0], [2, 1], [3, 2], [4, 2], [5, 0], [6, 'x']] 
  表示： 1弦空弦，2弦1品，3弦2品，4弦2品，5弦空弦，6弦不发音

  barres: 定义大横按，
  例如： [{ fromString: 6, toString: 1, fret: 1 }] 
  表示： 大横按从6弦到1弦，在1品按住
*/
export const chordData = {
  C: {
    chord: [[1, 0], [2, 1], [3, 0], [4, 2], [5, 3], [6, 'x']],
  },
  
  "C#m": {
    position: 4,
    chord: [[1, 1], [2, 2], [3, 3], [4, 3], [5, 1], [6, 'x']],
    barres: [
      { fromString: 5, toString: 1, fret: 1 },
    ],
  },
  
  D: {
    chord: [[1, 2], [2, 3], [3, 2], [4, 0], [5, 'x'], [6, 'x']],
  },
  
  Dm: {
    chord: [[1, 1], [2, 3], [3, 2], [4, 0], [5, 'x'], [6, 'x']],
  },
  
  "D#dim": {
    chord: [[1, 1], [2, 2], [3, 1], [4, 2], [5, 'x'], [6, 'x']],
  },
  
  E: {
    chord: [[1, 0], [2, 0], [3, 1], [4, 2], [5, 2], [6, 0]],
  },
  
  Em: {
    chord: [[1, 0], [2, 0], [3, 0], [4, 2], [5, 2], [6, 0]],
  },
  
  F: {
    chord: [[1, 1], [2, 1], [3, 2], [4, 3], [5, 3], [6, 1]],
    barres: [
      { fromString: 6, toString: 1, fret: 1 },
    ],
  },
  
  "F#dim": {
    chord: [[1, 1], [2, 2], [3, 3], [4, 1], [5, 'x'], [6, 'x']],
  },
  
  "F#m": {
    chord: [[1, 2], [2, 2], [3, 2], [4, 4], [5, 4], [6, 2]],
    barres: [
      { fromString: 6, toString: 1, fret: 2 },
    ],
  },
  
  G: {
    chord: [[1, 3], [2, 0], [3, 0], [4, 0], [5, 2], [6, 3]],
  },
  
  "G#dim": {
    chord: [[1, 4], [2, 5], [3, 3], [4, 4], [5, 3], [6, 'x']],
  },
  
  "G#m": {
    position: 4,
    chord: [[1, 1], [2, 1], [3, 1], [4, 3], [5, 3], [6, 1]],
    barres: [
      { fromString: 6, toString: 1, fret: 1 },
    ],
  },

  A: {
    chord: [[1, 0], [2, 2], [3, 2], [4, 2], [5, 0], [6, 'x']],
  },
  
  Am: {
    chord: [[1, 0], [2, 1], [3, 2], [4, 2], [5, 0], [6, 'x']],
  },
  
  B: {
    chord: [[1, 2], [2, 4], [3, 4], [4, 4], [5, 2], [6, 'x']],
    barres: [
      { fromString: 5, toString: 1, fret: 2 },
    ],
  },
  
  Bm: {
    chord: [[1, 2], [2, 3], [3, 4], [4, 4], [5, 2], [6, 'x']],
    barres: [
      { fromString: 5, toString: 1, fret: 2 },
    ],
  },
};
