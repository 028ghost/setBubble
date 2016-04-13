
var creatBubble = function(obj) {

    var getAclass = function() {
        var tagName = document.getElementsByTagName(obj.tagName);
        var aArr = [];
        var pattern = eval("/" + obj.className + "/i");
        for (var i = 0; i < tagName.length; i++) {

            if (pattern.test(tagName[i].getAttribute('class'))) {
                aArr.push(tagName[i]);
            }
        }
        return aArr;
    };

    for (var i = 0; i < getAclass().length; i++) {
        var c = true;
        getAclass()[i].onclick = function(e) {
            if (c) {
                c = false;
                var e = e || event;
                var posX = e.clientX - this.offsetLeft;
                var posY = e.clientY - (this.offsetTop - document.documentElement.scrollTop);
                var t
                var crEm = document.createElement('em');
                this.appendChild(crEm);
                var self = this;
                var em = this.getElementsByTagName('em')[0];

                em.style.background=obj.bgColor||'#fff';
                em.style.width = this.offsetWidth + 'px';
                em.style.height = this.offsetWidth + 'px';

                em.style.left = posX - em.offsetWidth / 2 + 'px';
                em.style.top = posY - em.offsetHeight / 2 + 'px';

                t = setInterval(function() {
                    self.removeChild(em);
                    clearInterval(t);
                    c = true;
                }, 600);

            }
        }
    }
};


creatBubble({
    className: 'set-link',   //  调用的class样式名
    tagName:'a', //作用在a标签名上
    bgColor:'#fff'  //涟漪背景色，默认为白色
});