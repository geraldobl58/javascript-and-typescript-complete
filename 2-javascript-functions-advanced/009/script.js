function myFunction(max) {
  console.log(max)

  if (max >= 10) return
  max++

  myFunction(max)
}

myFunction(0)