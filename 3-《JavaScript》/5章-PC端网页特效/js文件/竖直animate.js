function animate(obj, sum) {
    //先删除原来的属性，防抖
    clearInterval(obj.timer);

    // if (callback) {
    //     callback();
    // }
    obj.timer = setInterval(function () {
        var step = (sum - window.pageYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        if (window.pageYOffset == sum) {
            clearInterval(obj.timer);
            //修改后退时路程变化bug
            //如果有参数传过来，就执行
            
            window.scroll(0,window.pageYOffset + step);
        }
    }, 50)
}

