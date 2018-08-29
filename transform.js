module.exports = function(css) {
    console.log(css);
    const transformed = css.replace(/}/g, 'box-sizing: border-box;\n}');
    return transformed;
}