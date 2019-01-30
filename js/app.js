



$(function(){

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