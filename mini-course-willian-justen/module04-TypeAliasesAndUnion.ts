//type alias
type Uid = number | string | undefined

function logDetails(uid: Uid, name: string, age: number) {
  console.log(`uid: ${uid}, Name: ${name}, Age: ${age}`)
}

function logInfoProduct(uid: Uid, description: string) {
  console.log(`uid: ${uid}, Description: ${description}`)
}

type Platform = 'Windows' | 'Linux' | 'Mac'

function renderPlatform(platform: Platform) {
  console.log(`Plataform: ${platform}`)
  return platform
}

renderPlatform('Windows') // no error
renderPlatform('Linux') // no error
renderPlatform('Mac') // no error
/*renderPlatform('Android') // error*/

logDetails(1, 'Willian', 30)
logInfoProduct(1, 'Laptop')
