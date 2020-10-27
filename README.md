## 生成一个无比简洁版的react项目模版

### 1. 安装方法

如果你使用`npm`：

```shell
npm install kopsht -g
```

如果你使用`yarn`：

```shell
yarn global add kopsht
```

## 2. 基础命令

安装后`kopsht`后全局支持`kopsht`命令和简写版的`kp`命令！以下用`kp`命令代替`kopsht`命令：

#### 2.1 初始化命令

初始化当前目录

```shell
kp init .
```

在当前目录下新建并初始化一个名为`react-demo`的项目：

```shell
kp init react-demo
```

#### 2.2 启动命令

启动当前项目，默认为本机`IP`，默认端口为8000:

```shell
kp serve
```

命令行修改启动ip及端口：

```shell
kp serve --port 8081
kp serve --host localhost
kp serve --host localhost --port 8081
```

#### 2.3 打包命令

```shell
kp build
```

