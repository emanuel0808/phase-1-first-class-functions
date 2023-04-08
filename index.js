function receivesAFunction(callback) {
    callback();
  }
  receivesAFunction();

receivesAFunction(function(){ return "After I get Breakfast"})
function returnsANamedFunction(){
    return receivesAFunction;
}
function anonymous(){
    return '';
}
function returnsAnAnonymousFunction(){
    return(function() {  });
}