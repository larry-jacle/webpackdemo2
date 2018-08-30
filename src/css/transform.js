module.exports = function(css) {
    console.log(css)
    console.log("--run here!");
    return  css.replace('blue', 'red')
}