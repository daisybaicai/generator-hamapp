# hamapp

通过hamapp可以生成对应的脚手架，现在为第一版。

## 目录结构
核心部分
```
└── app
    ├── _prompt
    │   ├── _html.js
    │   ├── _js.js
    │   └── _style.js
    ├── index.js
    └── templates
        ├── index.ejs
        ├── js
        │   └── main.ejs
        └── style
            └── style.ejs
```

## 版本迭代
### 0.1.0
- 通过npm link 在本地链接，使得可以通过对应的命令来生成脚手架
- 需要全局安装yeoman， 该脚手架基于yeoman。
- 通过yo hamapp 即可运行
- 运行后在进行一系列选项以后，会在当前目录下生成以下结构

