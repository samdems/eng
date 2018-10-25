global.t = function(s,d){
  s = fs.readFileSync(s).toString()
 for(var p in d)
   s=s.replace(new RegExp('{'+p+'}','g'), d[p]);
 return s;
}
