console.log("on spa initilization");
if(typeof global.settings === 'undefined'){
  console.log("developer mode detected");
  let _settings = {};
  for(var key in process.env){
    if(key.startsWith("REACT_APP")){
      _settings[key.replace("REACT_APP_","")] = process.env[key]
    }
  }
  global.settings = _settings;
}else{
  console.log("release mode detected");
}

console.log(global.settings);
