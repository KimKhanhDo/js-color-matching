export const getRandomColorPairs = (count) => {
  // receive count --> return count * 2 random colors
  // using lib: https://github.com/davidmerfield/randomColor
  const colorList = []
  const hueList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'monochrome']

  // random "count" colors
  for (let i; i < count; i++) {
    // randomColor function provided by https://github.com/davidmerfield/randomColor
    const color = window.randomColor({
      luminosity: 'dark',
      hue: hueList[i % hueList.length],
    })

    colorList.push(color)
  }

  // double current color list
  const fullColorList = [...colorList, ...colorList]

  // suffle the list
  shuffle(fullColorList)

  return fullColorList
}

function shuffle(arr) {
  if (!Array.isArray(arr) || arr <= 2) return arr

  for (let i = arr.length - 1; i > 1; i--) {
    const j = Math.floor(Math.random() * i)

    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}
