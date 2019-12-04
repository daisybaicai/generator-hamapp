module.exports = [{
  type: 'list',
  name: 'cli',
  message: '你想用以下哪种进行开发?',
  choices: [{
    name: 'Html',
    value: 'html'
  },{
    name: 'Vue',
    value: 'vue'
  },{
    name: 'React',
    value: 'react'
  }],
  default: 0
}];
