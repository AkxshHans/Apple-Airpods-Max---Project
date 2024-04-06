// Shery.makeMagnet(" .main , .main2" /* Element to target.*/, {
//     //Parameters are optional.
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });


  Shery.hoverWithMediaCircle(".main2 img" /* Element to target.*/, {
    images: ["maxwhite,png", "image2.jpg", "image3.jpg"] /*OR*/,
    //videos: ["video1.mp4", "video2.mp4"],
  });


  gsap.from ("#main3 img , #main3 #content h1 , #main3 #content p",{
    scale : 0,
    opacity : 0,
    scrollTrigger : {
      trigger : "#main3 img , #main3 #content h1 , #main3 #content p",
      scroller : "body",
      start : "bottom 50%" ,
      end : "bottom 50%" ,
      scrub : 5


    }
  })



