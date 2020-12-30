$('.quotes').slick();


// start галерея на magnificPopup
$(".gallery-list").magnificPopup({
delegate: "a",
type: "image",
gallery: {
   enabled: true
}
});
// end галерея на magnificPopup

// start галерея на masonry 
$('.grid').masonry({
   // options
   itemSelector: '.grid-item',
   columnWidth: 150
 });
// end галерея на masonry 
