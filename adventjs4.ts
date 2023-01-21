
function fitsInOneBox(boxes: { l: number; w: number; h: number }[]): boolean {
    const sort = boxes.sort((a,b) => a.l - b.l)
    const boxed =  sort.every((box, i, array) => {
        if (i === array.length -1) return true
        const values = Object.values(box)
        const nextValues = Object.values(array[i+1])
        const areMinor = values.every((item, i) => item < nextValues[i])
        return areMinor
    })
    return boxed
  }

  // Raffy Jay Ridad
  // BSIT - 4C