// prettier-ignore
export const formatSpacing = (
  spacing,
  spacingVertical,
  spacingHorizontal,
  spacingTop,
  spacingBottom,
  spacingLeft,
  spacingRight,
) => {
  let spacingArr = [0, 0, 0, 0]

  if (spacing) {
    const splitSpacing = spacing.split(' ')
    const spacingLength = splitSpacing.length

    if (spacingLength === 1) {
      spacingArr = [spacing]
    } else if (spacingLength === 2) {
      spacingArr = [...splitSpacing, ...splitSpacing]
    } else if (spacingLength === 4) {
      spacingArr = splitSpacing
    }
  }
  if (spacingVertical) {
    spacingArr[0] = spacingVertical
    spacingArr[2] = spacingVertical
  }
  if (spacingHorizontal) {
    spacingArr[1] = spacingHorizontal
    spacingArr[3] = spacingHorizontal
  }
  if (spacingTop) {
    spacingArr[0] = spacingTop
  }
  if (spacingBottom) {
    spacingArr[2] = spacingBottom
  }
  if (spacingRight) {
    spacingArr[1] = spacingRight
  }
  if (spacingLeft) {
    spacingArr[3] = spacingLeft
  }

  return spacingArr.join(' ')
}
