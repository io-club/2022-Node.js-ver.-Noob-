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
        1.node [你的文件名].js
        2.嵌入在html中
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
        + Promis

            _一个 Promise 对象代表一个在这个 promise 被创建出来时不一定已知值的代理。它让你能够把异步操作最终的成功返回值或者失败原因和相应的处理程序关联起来。这样使得异步方法可以像同步方法那样返回值：异步方法并不会立即返回最终的值，而是会返回一个 promise，以便在未来某个时候把值交给使用者。_

            ```
                a. promise风格

                    axios.request(method).then(
                        res => console.log(res)
                    ).catch(
                        err => console.log(err)
                    )
                    
                    axios.request(method).then(
                            res => console.log(res)
                            err => console.log(err)
                        )
                b. promise状态
                    pending
                    fulfilled
                    rejected
                c. resolve & reject
                    Promise.resolve([DATA])
                    返回含有data数据的fulfilled的promise对象
                    Promise.reject([REASON])
                    返回失败原因为reason的rejected的promise对象
            ```
            ![Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

        + import & export
            1. export
            ```
                a. export
                    export let obj={...}
                    export let obj2={...}
                    export let obj3={...}
                b. export default
                    export default function fun(){
                        return true
                    }
                    //export default 只能有一个
                c. export from 
                    export * from …;
                    export * as name1 from …;
                    export { name1, name2, …, nameN } from …;
                    export { import1 as name1, import2 as name2, …, nameN } from …;
            ```
            1. import

            ```
                a. import
                    import {obj, obj1, obj2} from "[PATH].js"
                    import * as OBJ from "[PATH].js"
                b.  特殊的import
                    const OBJ = import("[PATH]")
            ```
        + async & await

            ```
                a.async 函数
                    返回一个promise对象
                b. await 
                    let a = await new Promise((resolve, reject)=>{
                        resolve('OK')
                    })
                    若await成功, 则返回 值或data
                    若await失败, 则返回 失败原因, 可以使用try...catch或.then接收错误

            ```
            
