



$(function(){
    
    let queue = new Queue();
    let animationManager = new AnimationManager();
    let viewManager = new ViewManager();
    
    $("#enQueueBtn").click(() => {

        if (queue.isFull()) {
            viewManager.showQueueFull();
        } else {
           let valueObject = viewManager.enqueueElementView(queue.getSize());
           queue.enQueue(valueObject.content);
           animationManager.animeEnqueueBtn(valueObject.domElement);
        }

    });
        
            
    $("#frontBtn").click(() => {
        if (queue.isEmpty()) {
            viewManager.showQueueEmpty(true);
        } else {
            let frontOfQueue = viewManager.findDomObject();     
            animationManager.animeFrontBtn(frontOfQueue);
        }
    }); 
    
    
    $('#deQueueBtn').click(() => {

        if (queue.isEmpty()) {
            viewManager.showQueueEmpty(true);
        } else {
            let lastElem = viewManager.findDomObject();
            animationManager.animeDequeueBtn(lastElem);  
            queue.deQueue();      
        }


    });

    $('#isEmptyBtn').click(() => {
        viewManager.showQueueEmpty(queue.isEmpty());
    });

    $('#sizeBtn').click(() => {
        viewManager.showQueueSize(queue.getSize());
    });



                
    
})