module.exports = function(css) {
    console.log(css)
    console.log(window.innerWidth)

    if (window.innerWidth <2000) {
        return  css.replace('19px', '30px')
    }
    return css;
}