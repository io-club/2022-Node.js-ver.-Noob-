# Node.js

## JavaScript 基础
 
1. 安装node.js
    - [Link](https://nodejs.org/zh-cn/download/)</br>
    - <kbd>win</kbd> + <kbd>R</kbd> 输入cmd</br>
    - 输入
    ```
        node -v
    ```
    出现版本号则为成功


2. JavaScript 语法<br>

    - [Link](https://www.javascript.com/learn)
    
    - 你的第一个JS程序

    ```
        var a = '千束'
        var b = '泷奈'
        console.log(a + '贴贴' + b)
    ```
    - 运行第一个程序

    ```
        node [你的文件名].js
    ```

    - 深入一些 

        + Javascript的基本数据类型
        ```
            字符串(String):     var str = "Lycoris Recoil"
            数字(Number):       var num = 114.514
            布尔(Boolean):      var bool = false
            空(Null)            
            未定义(Undefined)
            Symbol              (没用过)
        ```
        + Javascript引用数据类型(对象类型)
        ```
            对象(Object)        var obj = new Object
            数组(Array)         var arr = new Array() || var arr = []
            函数(Function)
            正则(RegExp)        (没用过,但是有用)
            日期(Date)
        ```
        + Javascript逻辑控制:
            ```
                a. 条件
                    if(){
                        [语句]
                    }else{
                        [语句]
                    }

                b. switch
                    switch(){
                        case xx:{
                            [语句]
                            break
                        } 
                        default:{
                            [语句]
                        }
                    }

                c.for循环
                    for(;;){

                    }

                d. while循环
                    while(){
                        [语句]
                    }

                e. for-in
                    for(x in things){
                        [语句]
                    }
            ```
        + Javascript函数:
            ```
                a.函数定义
                    function f([参数]){
                        [语句]
                        return
                    }
                    
                    或

                    var myFunction = new Function("a", "b", "return a * b") 
                    // 别用，用了可能会挨骂:)
                    

                b.函数调用
                    f()

                c. 递归
                    function fact(x){x==0 ?  1 : x * fact(x-1)}
                
                d.关于Argument
                    类数组对象 但方法仅有.length
            ```
        + Javascript对象:<br>
             _万物皆对象_
             ```
                a.创建对象
                    var obj = new Object()
                b.为对象添加属性
                    obj.name = "86-不存在的战区"
                    obj.character = "辛耶"
                    obj.watch = function(){
                        console.log("看番")
                    }
                    或者使用字面量创建对象

                    var obj = {
                        name: "86-不存在的战区",
                        character: "辛耶",
                        watch(){
                            console.log("看番")
                        }
                    } 
             ```

        + Fragment
            ```
                a. export你的文件 
                    export
                    module.export
                b.import你的文件
                    require([你文件的位置])
                c.路径写法
                    相对路径:
                    ./
                    /
                    ../
                    绝对路径:
                    D:\~~~~~~~~
                    小小的补充:
                    // linux home路径: ~/
            ```

## ECMAJavaScript
_此部分主要讲ES的新特性_
    
1. let, const, 块级作用域
    ```
        let X = 'asdqwe'
        const me = 'zzx'
    ```
2. 箭头函数

    _()=>{}_
    ```
        const arrowFunc = () => {
            console.log('我是箭头函数')
            return '箭头函数'
        }
    ```
    - 关于箭头函数

        + 关于this

            其不会创建自己的this，只会在自己的作用域链的上一层继承this
            ```
                function Stu(){
                    this.age = 18
                    setInterval(
                            () => {
                                console.log("I am" + this.age + "years old!!")
                            }, 1000)
                }
            ```
        + 箭头函数的一些写法
            ```
                a. 当参数仅有一个
                    const a = arg => {[语句]}
                b. 当callback仅有一个
                    const a = (...arg) => callback
                c. 对象中写法
                    let obj = {
                        a: 123,
                        b: "哈哈哈哈",
                        arrow: () => {}
                    }
                d. callback为字面量
                    () => ({
                        animation: "GuiltyCrown",
                        man: "樱满集",
                    })
                e. 递归
                    var fact = (x) => ( x==0 ?  1 : x*fact(x-1) );

            ```

        + 解构赋值
            ```
                a.  对象解构
                    let obj = {
                        a: 'i am a',
                        b: {
                            bb: 'i am bb'
                        },
                    }

                    // 解构
                    const {a: isA='i am A', b: {bb: isBB}}
                    const {a} // 解构赋值
                    const {a: isA} // 解构赋值并重命名
                    const {a = 'i am A'} // 解构赋值并修改值
                    
                b.  数组解构
                    let arry = [1, 2, 3]

                    // 解构
                    const [a0, a1=4] = arry
            ```
        + 模板字符串
            ```
                const a = '小明', b = 19
                console.log(`
                    我是${a == '小明' ? '小明' : '田所浩二'}今年
                    ${b == 19 ? 19 : 24}岁,是学生`)
            ```
        + Array API
            ```
                a.filter
                    let k-on = [
                        {
                            name: '平泽唯',
                            age: 16,
                            club: 'K-ON'

                        },
                        {
                            name: '秋山澪',
                            age: 16,
                            club: 'K-ON'

                        },
                        {
                            name: '田井中律',
                            age: 16,
                            club: 'K-ON'

                        },
                        {
                            name: '琴吹䌷',
                            age: 16,
                            club: 'K-ON'

                        },
                        {
                            name: '中野梓',
                            age: 15,
                            club: 'K-ON'

                        }
                    ]

                    let aa = k-on.filter(
                        obj=> obj.age > 15)

                b.map

                    k-on.map(obj => obj.age += 1)


            ```
        + Promise
            ```
                a.promise风格

                    axios.request(method).then(
                        res => console.log(res)
                    ).catch(
                        err => console.log(err)
                    )
                    
            ```
