// PUT YOUR CODE HERE
const figuresTimeLine = gsap.timeline()

figuresTimeLine
  .from('.red', {x:"-100%", y: "-100%", duration: .5, delay: .5})
  .from('.green', {x:"100%", y: "-100%", duration: .5})
  .from('.blue', {x:"100%", y: "100%", duration: .5})
  .from('.yellow', {x:"-100%", y: "100%", duration: .5})
  .to('.red', {x: "-100%", left: "100vw", borderRadius: "50%", duration: 1})
  .to('.green', {y: "-100%", top: "100vh", borderRadius: "50%", duration: 1}, "<")
  .to('.blue', {x:0, left: 0, borderRadius: "50%", duration: 1}, "<")
  .to('.yellow', {y: 0, top: 0, borderRadius: "50%", duration: 1}, "<")
  .to('.red', {backgroundColor: "green"}, "<")
  .to('.green', {backgroundColor: "blue"}, "<")
  .to('.blue', {backgroundColor: "yellow"}, "<")
  .to('.yellow', {backgroundColor: "red"}, "<")
  .to('.red', {x: 0, duration: 1} )
  .to('.green', {x: "100%", duration: 1}, "<" )
  .to('.blue', {x: "-100%", duration: 1}, "<" )
  .to('.yellow', {x: "-100%", duration: 1}, "<" )