function screen(){
    const controller = new ScrollMagic.controller();

    new ScrollMagic.Scene({
        duration:500,
        triggerElement:'.line-right',
        triggerHook:0,
    })
    .setPin('.line-right')
    .addIndicators()
    .addTo(controller);
}

screen()