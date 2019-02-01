



class AnimationManager {
    constructor() {
    }

    animeFrontBtn(animeObject) {
            
        animeObject.animate({
            opacity: 0.5,
            backgroundColor: 'red'
            }, 500,
            () => { 
                    animeObject.animate('bounce',{
                        repeat: 3,
                        duration: 500,
                        end: () => {
                            animeObject.animate({
                                opacity: 1,
                                backgroundColor: '#87cefa'       
                            }, 500)
                        }
                    });
                }
        );
    }

    animeEnqueueBtn(animeObject) {
                    
        animeObject.css("opacity", "0");
        animeObject.css("position", "relative");
        animeObject.css("top", "-100px");
        animeObject.css("left", "-100px");
        animeObject.css("background-color", "blue");
        
        animeObject.animate({
            opacity: 1,
            top: 0,
            left: 0,
            backgroundColor: '#87cefa'
        }, 600);
    }


    animeDequeueBtn(animeObject) {

        /*
        let globalPos = animeObject.offset();
        let detachedElem = animeObject.detach();
        detachedElem.css("position", "absolute");
        detachedElem.css("top", globalPos.top);
        detachedElem.css("left", globalPos.left);
        detachedElem.css("z-index", 10);
        $("body").append(detachedElem);

        detachedElem.animate({
            opacity: 0,
            top: '+=100',
            left: '+=100',
            backgroundColor: 'blue'
        }, 750,
        () => {
            detachedElem.remove(); // this can be nested in ViewManager but animation effect is lost in that occasion.
        });
        */

        animeObject.animate({
            opacity: 0,
            top: '+=100',
            left: '+=100',
            backgroundColor: 'blue'
        }, 750,
        () => {
            animeObject.remove(); // this can be nested in ViewManager but animation effect is lost in that occasion.
        });
        
    }

}