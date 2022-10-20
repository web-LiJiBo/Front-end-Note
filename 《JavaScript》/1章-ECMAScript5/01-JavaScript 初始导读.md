# JavaScript 初始

## 结论导读  

        1.脚本语言：不需要编译，运行过程中由JS解释器（JS引擎）逐行进行解释执行。

        2.JavaScript的作用：表单的动态校验，网页特效，服务端开发，桌面程序，APP，控制硬件-物联网，游戏开发（cocos2d-js）

        3.JS的组成:
                   （1）JavaScript语法 
                   （2）DOM（页面文档对象类型）
                   （3）BOM（浏览器对象模型）

        4.JS有三种书写位置： 行内，内嵌，外部
    


## 代码详情
```
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- 3.外部，里面不允许再写代码-->
    <script src="JS文件/js-1.js"></script>
</head> 
<body>

     <!-- 1.行内 -->
     <input type="button" value="唐伯虎" onclick="alert('秋香')">
</body>
    <!-- 2.内嵌 -->
    <script>
        alert('李吉脖')
    </script>
</html>

```
