var moduleB = (function(){
  //导出对象
  var obj = {};
  var name ='小红';
  var flag=false;
  console.log(name)

  obj.name = name;
  obj.flag = flag;
  return obj;
})()
