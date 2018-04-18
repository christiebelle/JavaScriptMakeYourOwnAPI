const config = {
  entry: __dirname + "/src/app.js", //tells webpack where to start looking for the information to bundle together
  output: {
    filename: "bundle.js",     //where we want webpack to put the one file for our app
    path: __dirname + "/build"
  }
  devtool: "source-map" //this will tell us exactly where our errors are when debugging
};

module.exports = config;
