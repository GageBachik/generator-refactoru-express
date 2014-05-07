'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var RefactoruExpressGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.npmInstall();
        // TODO: npm start?
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('You\'re using the fantastic RefactorU Express generator.'));

    var prompts = [{
      type: 'confirm',
      name: 'jade',
      message: 'Would you like to use Jade as your view engine?',
      default: false
    },{
      type: 'confirm',
      name: 'static',
      message: 'Would you like to serve static files from the /public directory?',
      default: false
    },{
      type: 'confirm',
      name: 'bodyparser',
      message: 'Will you be accessing form data from POST requests? (includes body-parser module)',
      default: false
    }];

    // prompt the user and store the results in this.props
    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  app: function () {
    // this.mkdir('app');
    // this.mkdir('app/templates');

    this.copy('app.js');
    this.copy('package.json');
    this.copy('_gitignore', '.gitignore');

    if(this.props.jade) {
      this.directory('views');
    }

    // if(this.props.js) {
    //   if(this.props.jquery) {
    //     this.copy('main-jquery.js', 'main.js')
    //   }
    //   else {
    //     this.write('main.js', '')
    //   }
    // }
  },
});

module.exports = RefactoruExpressGenerator;