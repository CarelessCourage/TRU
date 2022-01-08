
import paths from './paths';

const textPaths1 = [
  {
    offset: 500,
    speedFactor: 1.2,
    blurMin: 0,
    blurFactor: 2,
    forward: true,
    path: paths[0],
    text: "Conquer time and space",
  },
  {
    offset: 600,
    speedFactor: 1.5,
    blurMin: 3,
    blurFactor: 5,
    forward: true,
    path: paths[1],
    text: "type is to convey thought, documents human history"
  },
  {
    offset: 700,
    speedFactor: 1.7,
    blurMin: 1,
    blurFactor: 3,
    forward: true,
    path: paths[0],
    text: "The power of type"
  }
]


const textPaths2 = [
  {
    offset: 500,
    speedFactor: 1.2,
    blurMin: 0,
    blurFactor: 2,
    forward: true,
    path: paths[3],
    text: "my mind thinks"
  },
  {
    offset: 600,
    speedFactor: 1.5,
    blurMin: 3,
    blurFactor: 5,
    forward: true,
    path: paths[3],
    text: "Your mind thinks too? Talk to me"
  },
  {
    offset: 800,
    speedFactor: 1.5,
    blurMin: 2,
    blurFactor: 5,
    forward: true,
    path: paths[0],
    text: "We are full of thoughts and feelings"
  },
  {
    offset: 300,
    speedFactor: 1.7,
    blurMin: 1,
    blurFactor: 3,
    forward: false,
    path: paths[0],
    text: "Talk to me. I want to know your mind"
  },
  {
    offset: 600,
    speedFactor: 1.7,
    blurMin: 2,
    blurFactor: 3,
    forward: false,
    path: paths[4],
    text: "Your words are precious to me. They are my map to your world"
  },
  {
    offset: 1100,
    speedFactor: 1.5,
    blurMin: 3,
    blurFactor: 5,
    forward: true,
    path: paths[2],
    text: "Lets explore our ideas together"
  },
  {
    offset: 0,
    speedFactor: 1.7,
    blurMin: 5,
    blurFactor: 5,
    forward: true,
    path: paths[4],
    text: "Our shared expereince will transend time and space"
  }
]

const textPaths3 = [
  {
    offset: 500,
    speedFactor: 1.2,
    blurMin: 0,
    blurFactor: 2,
    forward: true,
    path: paths[5],
    text: "We are type"
  },
  {
    offset: 600,
    speedFactor: 1.5,
    blurMin: 3,
    blurFactor: 5,
    forward: true,
    path: paths[5],
    text: "Civilisation started when humans began typing things down"
  },
  {
    offset: 700,
    speedFactor: 1.7,
    blurMin: 1,
    blurFactor: 3,
    forward: true,
    path: paths[5],
    text: "The human mind is typography"
  }
]

export default [
  textPaths1,
  textPaths2,
  textPaths3
]