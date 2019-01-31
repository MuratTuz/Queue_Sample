



$(function(){
    
    let queue = new Queue();
    
    $("#enQueueBtn").click(() => {
        let content = $("#pushElemInput").val();
        
        content = content ? content : queue.getSize();
        queue.enQueue(content);
        
        $("#queueContainer").prepend(
            `<div class="text-center text-truncate inline-block align-middle border-right border-primary" data-index="${queue.getSize()-1}" style="width:50px">
            ${content}</div>`
            );
            
            let prependedElem = $("#queueContainer").find("div").first();
            prependedElem.css("opacity", "0");
            prependedElem.css("position", "relative");
            prependedElem.css("top", "-100px");
            prependedElem.css("left", "-100px");
            prependedElem.css("background-color", "blue");
            
            prependedElem.animate({
                opacity: 1,
                top: 0,
                left: 0,
                backgroundColor: '#87cefa'
            }, 600);
            
            $("#pushElemInput").val("");
        });
        
        function animeFrontBtn(param) {
            
            param.animate({
                opacity: 0.5,
                backgroundColor: 'red'
                }, 500,
                () => { 
                        param.animate('bounce',{
                            repeat: 3,
                            duration: 500,
                            end: () => {
                                param.animate({
                                    opacity: 1,
                                    backgroundColor: '#87cefa'       
                                }, 500)
                            }
                        });
                    }
            );
        }
            
            $("#frontBtn").click(() => {
                let frontOfQueue = $("#queueContainer").find(`div[data-index="${queue.getFront().index}"]`);
                
                animeFrontBtn(frontOfQueue);
            }); 
            
            
            $('#deQueueBtn').click(() => {
                queue.deQueue();

                let lastElem = $("#queueContainer").find("div").last();
                lastElem.css("position", "relative");

                lastElem.animate({
                    opacity: 0,
                    top: '+=100',
                    left: '+=100',
                    backgroundColor: 'blue'
                }, 750,
                () => {
                    lastElem.remove();
                });

            });


            let stack = [];    
            $("#pushBtn").click(() => {
                let content = $("#pushElemInput").val();
                
                content = content ? content : stack.length;
                stack.push(content);
                
                $("#stackContainer").prepend(
                    `<div class="row border-top border-dark justify-content-center" data-index="${stack.length-1}">${content}</div>`
                    );
                    
                    let prependedElem = $("#stackContainer").find("div").first();
                    prependedElem.css("opacity", "0");
                    prependedElem.css("position", "relative");
                    prependedElem.css("top", "-100px");
                    
                    prependedElem.animate({
                        opacity: 1,
                        top: 0
                    }, 500, () => {
                        let stackElems = $("#stackContainer").find("div");
                        let newFontSize = 16 - (stack.length * 0.25);
                        stackElems.css("font-size", newFontSize + "px");
                    });
                    
                    let elems = $("#stackContainer").find("div");
                    $(elems[0]).addClass("btn-primary");
                    $(elems[1]).removeClass("btn-primary");
                    $("#pushElemInput").val("");
                });
                
                $("#popBtn").click(() => {
                    stack.pop();
                    
                    let elems = $("#stackContainer").find("div");
                    let topOfstack = elems.first();
                    topOfstack.css("position", "relative");
                    
                    topOfstack.animate({
                        left: "200px",
                        opacity: 0
                    }, 200, () => {
                        topOfstack.remove();
                        let newFontSize = 16 - (stack.length * 0.25);
                        elems.css("font-size", newFontSize + "px");
                    });
                    $(elems[1]).addClass("btn-primary");
                });
                
                $("#peekBtn").click(() => {
                    let topOfStack = $("#stackContainer").find("div").first();
                    topOfStack.removeClass("btn-primary");
                    topOfStack.addClass("btn-danger");
                    
                    topOfStack.animate({
                        opacity: 0.25
                    },
                    500,
                    () => {
                        topOfStack.animate({
                            opacity: 1
                        },
                        500,
                        () => {
                            topOfStack.removeClass("btn-danger");
                            topOfStack.addClass("btn-primary");
                        });
                    });
                });
            })