ITalk with React Native(使用React Native开发的一款聊天社交软件)

How to Use(以下开始我就用中文，干啥每个项目都E文。。。。害我看不懂，只给赏识中文的兄弟看,嘎嘎嘎！！！！)

==================================================================
后续内容:

    1.继续完善，加入后台RestFul服务,后台项目地址
    [java-italkserver](https://github.com/LancCJ/java-italkserver "java-italkserver")
    2.使用fetch请求数据 在主动关闭服务后的处理需要搞一下
         请求发送一个无效的地址(主动关闭后台服务,导致无法登陆) 进行提示


==================================================================
版本更新日志:

    2016年11月29日（这个版本开始加入后台服务请求才能运行）
        1.添加了一个网络请求的封装Component 路径：common/utils/NetUitl
        2.添加了一个定义一些不修改常量的Component 路径:common/Constants
            里面定义了HostUrl路径以及其他请求的路径
        3.统一服务器端和客户端 错误码的定义 定义文件    common/StateCode
        4.实现简单登录 需要配合后台服务
    2016年11月25日
        1.更新react-native版本到0.38.0,react版本到15.4.1
        2.在使用react-native-elements 里面的List时候区分了每个点击 然后进行不同页面跳转
        3.修改其他小问题
    2016年11月24日
        1.新增 关于页面
        2.加入 react-native-share 完善设置页面的点击事件
    2016年11月23日
        1.修改导航 左侧返回文字和按钮图标 使用自定义
        2.调整上一个版本 登录界面 IOS 和 Android 布局的问题 原因是 顶部Logo部分图片导致
    2016年11月22日
        1.加入react-native-router-flux 一款导航的第三方
        2.新增登录界面
        3.Android添加沉浸代码 但是效果不佳暂时设置false关闭沉浸
            MainActivity中有中文注释
        4.新增注册界面
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
    6.react-native-router-flux 一款导航器进行了封装方便管理页面管理，这里又偷懒了 呵呵 原谅我！
    7.react-native-share 一款分享的组件


==================================================================


1.使用步骤
--------
    1.1：先clone到本地，相信这一步大家做开发的都基本会,不去详细描述
    1.2：然后进入到项目根目录 CMD命令执行 npm install 这一步用来加载些项目依赖主要通过读取配置文件package.json
         来加载大家不用细究执行就是了
         执行的时候 报错
            npm WARN react-native-elements@0.6.3 requires a peer of react-native-vector-icons@^2.1.0 but none was installed.
            不用理会，因为项目使用了更高的版本3.0
    1.3: 然后在执行相应的平台命令
            Android执行react-native run-android
            IOS执行    react-native run-ios
2.程序截图
--------
![程序动态截图1](https://github.com/LancCJ/github-project-docs/raw/master/doc/react-native-italk/Screenshot/ScreenShot1.gif)




