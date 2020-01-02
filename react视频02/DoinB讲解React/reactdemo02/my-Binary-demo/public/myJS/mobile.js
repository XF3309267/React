(function() {
    // 用以判断是否是手机端，若是，则返回  false
        function IsPC() {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"
            ];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            console.log(flag)
            return flag;
        }


        var flag = IsPC();
        if (flag === true) {
                   } else {
                    // 以判断是 手机端 ，对手机端 加入  forMobilePhone.css
                loadaStyles("../myCSS/forMobilePhone.css");
                  var mySmStduioDynamicUl = document.getElementById("mobileStduioDynamic");
                if(mySmStduioDynamicUl){
                    var myAList = mySmStduioDynamicUl.getElementsByTagName("h7");
                }
                
                var CardShowDiv = document.getElementsByClassName("bodyShow")[0];
                if(CardShowDiv){
                    var cardshowList = CardShowDiv.getElementsByClassName("myHidden");
                }
                
                var Stduio_dynamic = document.getElementById("newsBinary");
                var stduio_study = document.getElementById("studyBinary");
                var stduio_introduce = document.getElementById("introduceBinary");
                console.log("$$$$$$$$$$$$$$$$$$");
                // console.log(stduio_study)
                //  在小屏幕绑定样式，绑定事件
                 (function myChangeAction() {
                     if(myAList){
                        for (let i = 0; i < myAList.length; i++) {
                            const element = myAList[i];
    
                            element.addEventListener("click", function() {
                                for (let j = 0; j < myAList.length; j++) {
                                    const my_ele = myAList[j];
                                    my_ele.classList.remove("active");
                                }
                                element.classList.add("active");
                                var m_num = Number(element.getAttribute("role"));
                                my_Only_Show(m_num);
                            });
                        }
                     }


                })();
                //  为小屏幕  学在Binary >>> 隐藏  or 显示

                             var sqls = [
                    //和CSS一样，也要注意顺序！
                    window.matchMedia('(max-width:769px)'),
                    window.matchMedia('(max-width:992px)'),
                    window.matchMedia('(max-width:1200px)')
                ]; mediaMatches(); //页面首次加载
                for (var i = 0; i < sqls.length; i++) {
                    sqls[i].addListener(mediaMatches);
                }
            }

            function my_Only_Show(num) {
                for (let index = 0; index < cardshowList.length; index++) {
                    const element = cardshowList[index];
                    element.classList.add("d-none");
                }
                cardshowList[num].classList.remove("d-none");

            }

            function mediaMatches() {
                              if (sqls[0].matches) {
                    stduio_study.style = "display:none";
                    stduio_introduce.style = "display:none";
                    Stduio_dynamic.href = "demo.html";
                } else if (sqls[1].matches) {
                    stduio_study.style = "display:block";
                    stduio_introduce.style = "display:block";
                    Stduio_dynamic.href = "#stduio_dynamic";
                }
            }

            function loadaStyles(url) {
                var link = document.createElement("link");
                link.rel = "stylesheet";
                link.type = "text/css";
                link.href = url;
                var head = document.getElementsByTagName("head")[0];
                head.appendChild(link);
            }

        })();