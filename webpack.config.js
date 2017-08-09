//var defPath = '/public/';
//var fileName = './public/[name].[ext]';
var path = require('path');

module.exports = {
    entry: './app/app.jsx',
    output: {
        path:__dirname,
        filename: './public/bundle.js'
        
    },
    resolve:{
        modules: [__dirname, 'node_modules'],
        alias: {
          Main: 'app/components/Main.jsx',
          Nav: 'app/components/Nav.jsx',
          Timer: 'app/components/Timer.jsx',
          Countdown: 'app/components/Countdown.jsx',
          Clock: 'app/components/Clock.jsx',
          CountdownForm: 'app/components/CountdownForm.jsx',
          Controls: 'app/components/Controls.jsx'
         
      
        },
        extensions: ['.js', '.jsx']
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query: {
                    presets:['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test:/\.scss$/,
                use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                
            }]
            },
            {
                test:/\.css$/,
                use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }]
            }
               ]
    },
    devtool: 'cheap-module-eval-source-map'
    
}