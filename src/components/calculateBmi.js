const getBmi = (weight = 0, feet = 0, inches = 0) => {
  const height = feet * 12 + inches
  const bmi = (weight * 703) / Math.pow(height, 2)
  const roundedBmi = Math.round(bmi * 100) / 10
  return !isFinite(roundedBmi) || roundedBmi == 0 ? '--.-' : roundedBmi
}

const getBmiText = (bmi = 0) => {
  return bmi
}

export { getBmi, getBmiText }

