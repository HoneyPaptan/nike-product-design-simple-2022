TweenMax.from(".logo h2", 2, {
    y:-20,
    opacity: 0,
    ease:Back.easeOut.config(4)})
TweenMax.to(".logo h2", 2, {
    y:0,
    opacity: 1,
    ease:Back.easeOut.config(4)})

TweenMax.staggerFrom(".menu ul li", 2, {
    delay: 1,
    y: -20,
    opacity: 0,
    ease:Back.easeOut.config(4)
} , 0.40)
TweenMax.staggerFrom(".bigtexts h2", 2, {
    delay:3,
    y: -50,
    opacity: 0,
    ease:Back.easeOut.config(4)

} , 0.40)

TweenMax.from(".image img", 3, {
    delay: 4,
    scale: 0,
    y:-20,
    opacity: 0,
    ease:Back.easeOut.config(4)})
TweenMax.to(".logo h2", 2, {
    delay: 4,
    y:0,
    scale: 1,
    opacity: 1,
    ease:Back.easeOut.config(4)})
