'use strict';
const Generator = require('yeoman-generator');
const fs = require('fs');
const Path = require('path');

module.exports = class extends Generator {
  initializing() {
    // 初始化得到当前文件夹下的目录，用于判断后续生成文件夹是否会重名。
    let existsFolders = []
    const files = fs.readdirSync('./')
    files.forEach(function (item) {
        let stat = fs.lstatSync("./" + item)
        if (stat.isDirectory() === true) { 
          existsFolders.push(item)
        }
    })
    this.existsFolders = existsFolders;
  }

  prompting() {
    this.log(
      `Welcome to the ham generator!`
    );

    let prompts = [
      {
        type: 'input',
        name: 'appname',
        message: '请输入项目名称：',
        default: 'demo',
        validate: (appname) => {
          if(this.existsFolders.indexOf(appname) > -1) {
            return `文件夹${appname}已存在`
          } else {
            return true;
          }
        }
      }
    ];

    prompts = prompts.concat(require('./_prompt/_html')).concat(require('./_prompt/_js')).concat(require('./_prompt/_style'));

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.options = props;
    });
  }

  writing() {
    this._renderViews(this.options);
  }

  install() {
    // this.installDependencies();
  }

  _renderViews(opt) {
    const DestFolder = Path.join(opt.appname, '/');
    fs.mkdir(Path.join(this.destinationPath(), DestFolder),function(err){
      if(err){
        return console.error(err);
      }
    });
    switch(opt.cli) {
      case 'html':
        this._renderHtml(DestFolder, opt);
        break;
      case 'vue':
        //render vue;
        break;
      case 'react':
        // render react;
        break;
    }
  }

  _renderHtml(dir, opt) {
    // html
    this.fs.copyTpl(
      this.templatePath('index.ejs'),
      this.destinationPath(Path.join(dir,'src','index.html')),
      opt
    )
    // js
    this.fs.copyTpl(
      this.templatePath('js/main.ejs'),
      this.destinationPath(Path.join(dir,'src','main.js')),
      opt
    )
    // css
    this.fs.copyTpl(
      this.templatePath('style/style.ejs'),
      this.destinationPath(Path.join(dir,'src','style.css')),
      opt
    )
  }
};
