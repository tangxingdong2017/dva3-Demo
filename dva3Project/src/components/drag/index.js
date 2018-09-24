export function Drag() {
        this.init = function () {
            this.el = document.createElement('div');
            this.el.style.width = '100px';
            this.el.style.height = '100px';
            this.el.style.background = this.randomColor();
            this.el.style.position = 'absolute';
            this.el.style.left = 0;
            this.el.style.top = 0;
            document.body.appendChild(this.el);
            this.start();
        }
        this.start = function () {
            var that = this;

            this.el.onmousedown = function (evt) {
                var e = evt || window.event;

                that.downX = e.clientX;
                that.downY = e.clientY;
                that.downL = that.el.offsetLeft;
                that.downT = that.el.offsetTop;

                window.onmousemove = function (evt) {
                    var e = evt || window.event;
                    that.move(e);
                }

                window.onmouseup = function () {
                    that.stop();
                }
            }
        }
        this.move = function (e) {
            var diffX = e.clientX - this.downX;
            var diffY = e.clientY - this.downY;
            this.el.style.left = this.downL + diffX + 'px';
            this.el.style.top = this.downT + diffY + 'px';
        }
        this.stop = function () {
            window.onmousemove = null;
            window.onmouseup = null;
        }
        this.randomColor = function () {
            return 'red';
        }
        this.init();
    } 