function animate(obj, sum, callback) {
    //先删除原来的属性，防抖
    clearInterval(obj.timer);
    if (callback) {
        callback();
    }
    obj.timer = setInterval(function () {

        //如果有参数传过来，就执行


        if (obj.offsetLeft == sum) {
            clearInterval(obj.timer);
            //修改后退时路程变化bug
        } else if ((sum - obj.offsetLeft) <= 0) {
            obj.style.left = obj.offsetLeft + Math.floor((sum - obj.offsetLeft) / 10) + 'px';
        } else if ((sum - obj.offsetLeft) >= 0) {
            obj.style.left = obj.offsetLeft + Math.ceil((sum - obj.offsetLeft) / 10) + 'px';
        }
    }, 50)
}

