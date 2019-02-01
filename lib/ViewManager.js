



class ViewManager {
    constructor() {

    }

    enqueueElementView(queueSize) {

        let content = $("#pushElemInput").val();        
        content = content || queueSize + 1;
           
        $("#queueContainer").prepend(
            `<div class="text-center text-truncate inline-block align-middle border-right border-primary py-5" style="width:5%">
            ${content}</div>`
        );
            
        let prependedElem = $("#queueContainer").find("div").first();   
        $("#pushElemInput").val(''); 
            
        return {
                content: content,
                domElement: prependedElem
            }
        
    }

    findDomObject() {
        return $("#queueContainer").find("div").last();
    }

    showQueueEmpty(queueState) {
        if (queueState) {
            $('.modal-body').html('Queue is Empty');
        } else {
            $('.modal-body').html('Queue is <b>NOT</b> Empty');
        }
        
        $('#queueModal').modal('toggle');
    }

    showQueueFull() {
        $('.modal-body').html('Queue is Full');
        $('#queueModal').modal('toggle');
    }

    showQueueSize(queueSize) {
        $('.modal-body').html(`Queue size : ${queueSize}`);
        $('#queueModal').modal('toggle');
    }
}