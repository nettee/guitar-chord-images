// 和弦数据定义
export const chordData = {
  F: {
    chord: [[1, 1], [2, 1], [3, 2], [4, 3], [5, 3], [6, 1]],
    barres: [
      { fromString: 6, toString: 1, fret: 1 },
    ],
    tuning: ['R', '5', 'R', 'T', '5', 'R'],
  },
  
  G: {
    chord: [[1, 3], [2, 0], [3, 0], [4, 0], [5, 2], [6, 3]],
    tuning: ['R', 'T', '5', 'R', '5', 'R'],
  },
  
  Em: {
    chord: [[1, 0], [2, 0], [3, 0], [4, 2], [5, 2], [6, 0]],
    tuning: ['R', '5', 'R', 'T', '5', 'R'],
  },
  
  Am: {
    chord: [[1, 0], [2, 1], [3, 2], [4, 2], [5, 0], [6, 'x']],
    tuning: ['R', '5', 'R', 'T', '5', 'R'],
  },
  
  Dm: {
    chord: [[1, 1], [2, 3], [3, 2], [4, 0], [5, 'x'], [6, 'x']],
    tuning: ['R', '5', 'R', 'T', '5', 'R'],
  },
  
  C: {
    chord: [[1, 0], [2, 1], [3, 0], [4, 2], [5, 3], [6, 'x']],
    tuning: ['R', '5', 'R', 'T', '5', 'R'],
  },
};
