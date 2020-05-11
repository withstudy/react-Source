# 本项目主要是模拟react 源码
### 搭建环境
	1、安装parcel
	```js
	npm install parcel-bundler --save -dev
	```
	2、安装babel 依赖
	```js
	npm i babel-core babel-preset-env babel-plugin-transform-react-jsx --save
	```
	3、创建babel 配置文件 `.babelrc`
	```js
	{
    		"presets":["env"],
    		"plugins":[
    			["transform-react-jsx,{
    				"prama":"React.createElement"
    			}]
    		]
    	}
	```
