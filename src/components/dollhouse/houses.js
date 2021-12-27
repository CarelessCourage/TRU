import leaves from '../../assets/dollhouse/leaves.png'
import foreground from '../../assets/dollhouse/foreground.png'
import background from '../../assets/dollhouse/gate.png'

const chinese = [
  {
    image: background,
    depth: 50,
    blur: 5
  },
  {
    image: foreground,
    depth: 75,
    blur: -10
  },
  {
    image: leaves,
    depth: 100,
    blur: -10
  }
]

export default {
  chinese: chinese
}