function basicTeenager(age) {
  if (age >=13 && age <=19) {
    return `You are a teenager!`
  } else {
    return `"undefined"` }
}
basicTeenager(13) + basicTeenager(12)

function teenager(age) {
  if (age >=13 && age <=19) {
    return `"You are a teenager!"`
} else {
  return `"You are not a teenager!"` }
}
teenager(13) + teenager(12) + teenager(29)

function ageChecker(age) {
  if (age >=13 && age <= 19) {
    return `"You are a teenager!"`
  } else if (age <= 12) {
    return `"You are a kid"`
  } else (age >= 19) {
    return `"You are a grownup"`}
  }
  ageChecker(13) + ageChecker(12) + ageChecker(29)

function ternaryTeenager(age) {
  return (age >=13 && age <= 19) ? `"You are a teenager!"` : `"You are not a teenager"`
}
ternaryTeenager(15) + ternaryTeenager(75)

function switchAge(age) {
  switch (age) {
    case (age >=13 && age <= 19) :
        return `"You are a teenager!"`
        break;
    default:
        return `"You have an age"`
      }
}
