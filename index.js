if("serviceWorker" in navigator){
    navigator.serviceWorker.register("service_worker.js").then(registration=>{
      console.log('Registration successful, scope is:', registration.scope);
      console.log("SW Registered!",registration);
    }).catch(error=>{
      console.log("SW Registration Failed",error);
    });
}else{
  console.log("Not supported");
}