const getBmi = (weight = 0, feet = 0, inches = 0) => {
  const height = feet * 12 + inches
  const bmi = (weight * 703) / Math.pow(height, 2)
  const roundedBmi = Math.round(bmi * 10) / 10
  return !isFinite(roundedBmi) || roundedBmi == 0 ? '--.-' : roundedBmi
}

const getBmiText = (bmi = 0) => {
  switch (true) {
    case bmi < 16:
      return 'Severe Thinness'
    case bmi < 17:
      return 'Moderate Thinness'
    case bmi < 18.5:
      return 'Mild Thinness'
    case bmi < 25:
      return 'Normal'
    case bmi < 30:
      return 'Overweight'
    case bmi < 35:
      return 'Obese Class I'
    case bmi < 40:
      return 'Obese Class II'
    case bmi >= 40:
      return 'Obese Class III'
    default:
      return '--.-'
  }
}

export { getBmi, getBmiText }

