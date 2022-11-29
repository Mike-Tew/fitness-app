const getBodyFatPercentage = (
  age = 0,
  weight = 0,
  chestSkin = 0,
  abSkin = 0,
  thighSkin = 0
) => {
  console.log(age, weight, chestSkin, abSkin, thighSkin)
  const fatTotal = chestSkin + abSkin + thighSkin
  const fatSquared = Math.pow(fatTotal, 2)
  const density =
    1.10938 - 0.0008267 * fatTotal + 0.0000016 * fatSquared - 0.0002574 * age
  const bodyFat = (4.57 / density - 4.142) * 100
  const fatMass = (weight * bodyFat * 0.01).toFixed(1)

  return {
    bodyFat: bodyFat.toFixed(1),
    fatMass: fatMass,
    leanMass: weight - fatMass
  }
}

export default getBodyFatPercentage
