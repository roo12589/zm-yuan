const imgBase64Map = require('./imgBase64Map')
module.exports = {
    imageMap: {},
    main() {
        /* e.g. "Hello, AutoJs6 6.4.1" */
        toastLog(`开始`);
        this.checkCaptureAndAllow();
        toastLog(`设备宽高 ${device.width} ${device.height}`);

        this.initImageMap()
        console.log("this.imageMap",this.imageMap);
        return

        const image = captureScreen();

        let target = ''
        const f = findImage(image, target);
        console.log("f", f);


    },
    checkCaptureAndAllow() {
        threads.start(() => {
            let i = 0;
            while (i < 3) {
                toastLog('查找截图立即开始按钮...' + i);
                if (text('立即开始').findOnce()) {
                    text('立即开始').findOnce().click();
                }
                i++;
                sleep(1000);
            }
        });
        if (!requestScreenCapture()) {
            toast("请求截图失败");
            exit();
        }
    },

    setFloaty() {
        var w = floaty.window(
            <frame gravity="center">
                <text id="text">悬浮文字</text>
            </frame>
        );
        setTimeout(() => {
            w.close();
        }, 2000);

    },
    initImageMap() {
        for (let i in imgBase64Map) {
            this.imageMap[i.name] = images.fromBase64("data:image/png;base64,"+i.value)

            return
        }
        // const readImage = 


    }
};