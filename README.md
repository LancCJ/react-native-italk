ITalk with React Native(使用React Native开发的一款聊天社交软件)

How to Use(以下开始我就用中文，干啥每个项目都E文。。。。害我看不懂，只给赏识中文的兄弟看,嘎嘎嘎！！！！)

==================================================================
后续内容:

    1.Android顶部状态栏沉浸
    2.导航统一
    3.因为导航从而遮挡每个界面的问题

==================================================================
版本更新日志:

    2016年11月19日
        1.项目才开始没啥好记得，目前只做前段的UI部分，边学边做
        2.引入react-native-gifted-chat用于组件聊天UI
        3.点击会话界面随便一条可以跳转到聊天室界面查看效果 doing......

==================================================================
项目依赖组件:

    1.mockjs 用来模拟请求然后获取Rap上面的假数据的
    2.react-native-elements 用来使用里面一些UI控件，比自己写减少很多代码
    3.react-native-tab-navigator 一个跨平台的(IOS,Android)的一个底部Tab切换，第二项以此进行了封装所以这个在使用
      react-native-elements的时候先npm install 进来
    4.react-native-vector-icons 这个就是很多icon不用自己再傻了吧唧的弄其他的了一般够用，特殊的自己再引入即可
    5.react-native-gifted-chat 聊天的一个UI组件，自己就不用辛苦写了嘛感谢老外 FaridSafi

==================================================================


1.使用步骤
--------
    1.1：先clone到本地，相信这一步大家做开发的都基本会,不去详细描述
    1.2：然后进入到项目根目录 CMD命令执行 npm install 这一步用来加载些项目依赖主要通过读取配置文件package.json
         来加载大家不用细究执行就是了
    1.3: 然后在执行相应的平台命令
            Android执行react-native run-android
            IOS执行    react-native run-ios
2.程序截图
--------
![程序动态截图](https://github.com/LancCJ/react-native-italk/raw/master/doc/Screenshot/ScreenShot1.gif)



