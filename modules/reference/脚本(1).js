auto();
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}
var 过图 = images.read("/storage/emulated/0/脚本/造梦西游OL/图片/过图.jpg");
var 抽牌 = images.read("/storage/emulated/0/脚本/造梦西游OL/图片/抽牌.jpg");
var 请翻牌 = images.read("/storage/emulated/0/脚本/造梦西游OL/图片/请翻牌.jpg");
var 重新挑战 = images.read("/storage/emulated/0/脚本/造梦西游OL/图片/重新挑战.jpg");
var 菜单 = images.read("/storage/emulated/0/脚本/造梦西游OL/图片/菜单.jpg");
var 验证 = images.read("/storage/emulated/0/脚本/造梦西游OL/图片/验证.jpg");

var 请恢复网络 = images.read("/storage/emulated/0/脚本/造梦西游OL/图片/请恢复网络.jpg");
var 进入游戏 = images.read("/storage/emulated/0/脚本/造梦西游OL/图片/进入游戏.jpg");
var 玲珑宝塔 = images.read("/storage/emulated/0/脚本/造梦西游OL/图片/玲珑宝塔.jpg");
var 李天王 = images.read("/storage/emulated/0/脚本/造梦西游OL/图片/李天王.jpg");
var 已阅读 = images.read("/storage/emulated/0/脚本/造梦西游OL/图片/已阅读.jpg");


var ooo = 0;


function 重新登入() {
    recents();
    click(id("clearbox").findOne().bounds().centerX(), id("clearbox").findOne().bounds().centerY());
    sleep(3000);
    launch("org.yjmobile.zmxy");
    toast("正在打开造梦西游OL");
    id("m4399_ope_id_btn_positive").findOne().click();
    id("username_clear_btn").findOne().click(); //叉
    setText([0], "")///////////账号
    setText([1], "")///////////密码
    id("protocol").findOne().click(); //用户协议
    text("登 录").findOne().click(); //登入
    while (true) {
        var 检测进入游戏 = findImage(captureScreen(), 进入游戏, {
            region: [0, 0, 2560, 1600]
        });
        if (检测进入游戏) {
            click(0, 0)
            sleep(1000)
            click(检测进入游戏.x, 检测进入游戏.y);
            break;
        }
        sleep(1000)
    }
    id("YJ4399WebViewNewCloseBtn").findOne().click();
    
    if (sex1 == "3") {
        while (true) {
            var 检测玲珑宝塔 = findImage(captureScreen(), 玲珑宝塔, {
                region: [0, 0, 2560, 1600]
            });
            if (!检测玲珑宝塔) {
                swipe(1466, 1213, 1466, 400, 1000)
            } else {
                click(检测玲珑宝塔.x, 检测玲珑宝塔.y)
                break
            }
        }
        sleep(500)
        while (true) {
            var 检测李天王 = findImage(captureScreen(), 李天王, {
                region: [0, 0, 2560, 1600]
            });
            if (检测李天王) {
                click(检测李天王.x, 检测李天王.y);
                break;
            }
        }
        sleep(500)
        while (true) {
            var 检测菜单 = findImage(captureScreen(), 菜单, {
                region: [0, 0, 2560, 1600]
            });
            if (!检测菜单) {
                click(2034, 1351)
            } else {
                break
            }
        }
    }



}

var sex1 = dialogs.singleChoice("选择关卡", ["龙宫", "月夜宫", "惊鸿殿", "玲珑宝塔"], null);
if (sex1 < 0) {
    exit();
}
var kk = ["龙宫关卡", "月夜宫关卡", "惊鸿殿关卡", "玲珑宝塔关卡"]
var sex = dialogs.singleChoice("选择自动方式", ["半自动", "全自动"], null);
if (sex < 0) {
    exit();
}
var kk1 = ["半自动",
    "全自动"
]
TrafficStats = android.net.TrafficStats;

var window = floaty.window(
    <frame>
        <vertical>
            <linear>
                <text id="action" text="55555555555" gravity="left" size="14" w="auto" h="80" color="#00ffff" bg="#000000"/>
                <text id="action1" text="" gravity="left" size="14" w="auto" h="80" color="#00ffff" bg="#000000"/>
                
            </linear>
            
        </vertical>
    </frame>
);

var x = 0,
    y = 0;
//记录按键被按下时的悬浮窗位置
var windowX, windowY;
//记录按键被按下的时间以便判断长按等动作
var downTime;
window.action.setOnTouchListener(function(view, event) {
    switch (event.getAction()) {
        case event.ACTION_DOWN:
            x = event.getRawX();
            y = event.getRawY();
            windowX = window.getX();
            windowY = window.getY();
            downTime = new Date().getTime();
            return true;
        case event.ACTION_MOVE:
            //移动手指时调整悬浮窗位置

            window.setPosition(windowX + (event.getRawX() - x),
                windowY + (event.getRawY() - y));

            return true;
        case event.ACTION_UP:
            //手指弹起时如果偏移很小则判断为点击
            if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                threads.start(function() {
                    onClick();
                });
            }
            return true;
    }
    return true;
});
var k = "\t\t\t\t\t\t\t丨" + kk1[sex] + "丨\t\t\t\t\t\n" + "已挑战" + kk[sex1] + "次数" + "\t\t" + "：" + "\n------------------------" + "\n"
ui.run(function() {
    window.action.text(k);
});
ui.run(function() {
    window.action1.text("\n" + 0 + "\t\t");
});
for (;;) {

    var 检测抽牌 = findImage(captureScreen(), 抽牌, {
        region: [0, 0, 2560, 1600]
    });
    var 检测请翻牌 = findImage(captureScreen(), 请翻牌, {
        region: [0, 0, 2560, 1600]
    });
    var 检测重新挑战 = findImage(captureScreen(), 重新挑战, {
        region: [0, 0, 2560, 1600]
    });
    var 检测菜单 = findImage(captureScreen(), 菜单, {
        region: [0, 0, 2560, 1600]
    });
    var 检测验证 = findImage(captureScreen(), 验证, {
        region: [0, 0, 2560, 1600]
    });
    var 检测恢复网络 = findImage(captureScreen(), 请恢复网络, {
        region: [0, 0, 2560, 1600]
    });
    var 检测已阅读 = findImage(captureScreen(), 已阅读, {
        region: [0, 0, 2560, 1600]
    });

    if (检测已阅读) {
        var k = "\t\t\t\t\t\t\t丨" + kk1[sex] + "丨\t\t\t\t\t\n" + "已挑战" + kk[sex1] + "次数" + "\t\t" + "：" + "\n------------------------" + "\n" + "网络异常，正在重新登入"
        ui.run(function() {
            window.action.text(k);
        });
        click(1285, 991)
        sleep(3000)
        重新登入();
    } else if (检测恢复网络) {
        var k = "\t\t\t\t\t\t\t丨" + kk1[sex] + "丨\t\t\t\t\t\n" + "已挑战" + kk[sex1] + "次数" + "\t\t" + "：" + "\n------------------------" + "\n" + "网络异常，正在重新登入"
        ui.run(function() {
            window.action.text(k);
        });
        click(1285, 991)
        sleep(3000)
        重新登入();
    } else if (检测抽牌) {
        var k = "\t\t\t\t\t\t\t丨" + kk1[sex] + "丨\t\t\t\t\t\n" + "已挑战" + kk[sex1] + "次数" + "\t\t" + "：" + "\n------------------------" + "\n" + "自动抽牌中"
        ui.run(function() {
            window.action.text(k);
        });
        click(检测抽牌.x, 检测抽牌.y) //1151,709
    } else if (检测请翻牌) {
        var k = "\t\t\t\t\t\t\t丨" + kk1[sex] + "丨\t\t\t\t\t\n" + "已挑战" + kk[sex1] + "次数" + "\t\t" + "：" + "\n------------------------" + "\n" + "自动翻牌中"
        ui.run(function() {
            window.action.text(k);
        });
        click(1151, 709);
    } else if (检测重新挑战) {
        var k = "\t\t\t\t\t\t\t丨" + kk1[sex] + "丨\t\t\t\t\t\n" + "已挑战" + kk[sex1] + "次数" + "\t\t" + "：" + "\n------------------------" + "\n" + "挑战加载中……"
        ui.run(function() {
            window.action.text(k);
        });
        click(检测重新挑战.x, 检测重新挑战.y);
    } else if (检测菜单) {
        var k = "\t\t\t\t\t\t\t丨" + kk1[sex] + "丨\t\t\t\t\t\n" + "已挑战" + kk[sex1] + "次数" + "\t\t" + "：" + "\n------------------------" + "\n" + "自动中\t不要手动操作"
        ui.run(function() {
            window.action.text(k);
        });
        if (sex1 == "0") {

            toast("正在挑战《龙宫副本》")

            
        } else if (sex1 == "1") {
            toast("正在挑战《月夜宫副本》")
            
        } else if (sex1 == "2") {
            toast("正在挑战《惊鸿殿副本》")
            
        } else if (sex1 == "3") {
            toast("正在挑战《玲珑宝塔副本》")
            
        }
        while (true) {
            var 检测过图 = findImage(captureScreen(), 过图, {
                region: [0, 0, 2560, 1600]
            });
            if (!检测过图) {
                click(2104, 418);
                sleep(50);
            } else {
                break;
            }
        }
        ui.run(function() {
            window.action1.text("\n" + (++ooo) + "\t\t");
        });
        toastLog(ooo);
        if (sex == "1") {
            if (ooo % 14 == "0") {
                for (var ww = 1; ww <= 390; ww++) {
                    var k = "\t\t\t\t\t\t\t丨" + kk1[sex] + "丨\t\t\t\t\t\n" + "已挑战" + kk[sex1] + "次数" + "\t\t" + "：" + "\n------------------------" + "\n" + "等待中：" + ww + "s/390s"
                    ui.run(function() {
                        window.action.text(k);
                    });
                    sleep(1000);
                    if (ww == 390) {
                        var k = "\t\t\t\t\t\t\t丨" + kk1[sex] + "丨\t\t\t\t\t\n" + "已挑战" + kk[sex1] + "次数" + "\t\t" + "：" + "\n------------------------" + "\n" + "已开始下一轮"
                        ui.run(function() {
                            window.action.text(k);
                        });
                    }
                }
            }
        }
    } else if (检测验证) {
        var k = "\t\t\t\t\t\t\t丨" + kk1[sex] + "丨\t\t\t\t\t\n" + "已挑战" + kk[sex1] + "次数" + "\t\t" + "：" + "\n------------------------" + "\n" + "检测到滑块，请手动验证"
        ui.run(function() {
            window.action.text(k);
        });
        media.playMusic("/storage/emulated/0/脚本/造梦西游OL/图片/提示.mp3");
        sleep(2000)
    }
    sleep(100)
}