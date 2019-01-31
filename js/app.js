



$(function(){

    let queue = new Queue();

    $("#enQueueBtn").click(() => {
        let content = $("#pushElemInput").val();

        content = content ? content : stack.length;
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

          prependedElem.animate({
            opacity: 1,
            top: 0,
            left: 0,
          }, 500);

          let elems = $("#queueContainer").find("div");
          $(elems[0]).addClass("btn-primary");
          $(elems[1]).removeClass("btn-primary");
          $("#pushElemInput").val("");
    });

    $("#frontBtn").click(() => {
          let frontOfQueue = $("#queueContainer").find(`div[data-index="${queue.getFront()}"]`);

          frontOfQueue.animate({
            opacity: 0.25,
          }, 500, () => {
            frontOfQueue.addClass("btn-danger");
            frontOfQueue.animate({
                opacity: 1
              },
              1000,
              () => {
                frontOfQueue.removeClass("btn-danger");
              });
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