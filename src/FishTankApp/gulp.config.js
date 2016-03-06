module.exports = function () {
    var webroot = './wwwroot/';
    var bower = {
        //json: require('./bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    };
    var config = {
        webroot: webroot,
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        // CSS LIBS
        bootstrapCss: bower.directory + 'bootstrap/dist/css/bootstrap.css',
        sbAdminCss: bower.directory + 'startbootstrap-sb-admin-2/dist/css/sb-admin-2.css',
        fontAwesomeCss: bower.directory + 'font-awesome/css/font-awesome.css',
        morrisCss: bower.directory + 'morrisjs/morris.css',
        // JS LIBS
        jqueryJs: bower.directory + 'jquery/dist/jquery.js',
        raphaelJs: bower.directory + 'raphael/raphael.js',
        morrisJs: bower.directory + 'morrisjs/morris.js',
        // FONTS LIBS
        fonts: bower.directory + 'font-awesome/fonts/*',
        // DEST
        jsDest: webroot + 'js',
        cssDest: webroot + 'css',
        fontDest: webroot + 'fonts'
        
    };

    return config;
}