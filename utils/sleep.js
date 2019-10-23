function sleep (time){
  return new Promise( (resolve,reject)=>{
      setTimeout(resolve,time);
  })
}

/**
 * @用例
 */

 /* async function run(){
  console.log(1)
  await sleep(3000);
  console.log(2)
} */


module.exports=sleep;