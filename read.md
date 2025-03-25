[调试端口修改](#调试端口修改)  
[创建Prefab的基本方法](#创建Prefab的基本方法)  
[CocosInspector安装及使用](#CocosInspector安装及使用)  
[组件生命周期](#组件生命周期)  


# 调试端口修改

debugport:  

Editor Window--->web pre port-->7457  

`..\github\cc2_4_9\test1\settings\project.json`  

`size: 750 , 1334`  

# 创建Prefab的基本方法

```

在场景中创建节点结构

在层级管理器中创建或调整节点，形成你想要的Prefab结构

将节点拖拽成Prefab

从层级管理器中将节点拖拽到资源管理器的某个文件夹中

松开鼠标后，你会看到一个新的Prefab资源被创建

通过菜单创建

在层级管理器中选择节点

右键点击选择"创建预制体"或"Create Prefab"

选择保存位置并命名
```


```
所有需要通过动态加载的资源，可以放入 resources 目录下或任何 bundle 文件夹下。bundle 文件夹与 resources 文件夹相似，构建时，bundle 文件夹内的所有资源（包括场景）以及相关的外部资源都会进行打包。加载时可先用 cc.assetManager.loadBundle 加载对应 bundle，之后即可使用 bundle.load 等方法加载 bundle 中的资源。

Bundle 可设置不同的优先级，Creator 内置了 10 个优先级可选择，编辑器构建时将会按照优先级从大到小对 bundle 进行依次构建，当同个资源被不同优先级的多个 bundle 引用时，资源会优先放在优先级高的 bundle 中，低优先级的 bundle 只会存储一条记录信息，此时低优先级的 bundle 会依赖高优先级的 bundle，请在加载低优先级 bundle 之前加载高优先级 bundle；当资源被相同优先级的多个 bundle 引用时，资源会在每个 bundle 中复制一份，此时不同 bundle 没有依赖关系，可用任意顺序加载。所以请尽量让 Texture、SpriteFrame、Audio 等共享的资源放在更高优先级的 bundle，从而让其它 bundle 可共享其资源，减小包体。
```


{h}cocos creator的UI调试{!h}   

# CocosInspector安装及使用
目录: \github\cc2_4_9\test1\packages\cocos_inspector  
使用: Extension->Cocos Inspector->preview Mode   

# 组件生命周期

    组件创建
    ↓
    onLoad() → (如果激活) → onEnable()
    ↓
    start() (仅在第一次激活前)
    ↓
    循环: update() → lateUpdate()
    ↓
    onDisable() (当组件/节点被禁用)
    ↓
    onDestroy() (当组件/节点被销毁)



BlockInputEvent  

自动图集  
`zzqx\trunk\client\assets\bundles\common\plist\kuang`  

