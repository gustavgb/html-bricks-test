exports.postBuild = function (files) {
  console.log('Custom plugin!')
  return Promise.resolve(files)
}
