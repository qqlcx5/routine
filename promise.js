
  //   function sleep(duration) {
  //     return new Promise(function(resolve, reject) {
  //         setTimeout(resolve,duration);
  //     })
  // }
  // sleep(1000).then( ()=> console.log("finished"));


  var r = new Promise(function(resolve, reject){
    console.log("a");
    resolve()
  });
  r.then(() => console.log("c"));
  console.log("b")