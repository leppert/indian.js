var native = {is: ('fluid' in window ? 'fluid' : 'platform' in window ? 'prism' : false)};

switch(native.is){
  case 'fluid':
    native.badge = function(text){
      if(typeof text == 'undefined'){
        return window.fluid.dockBadge;
      } else {
        window.fluid.dockBadge = text;
      }
    };
    native.notify = function(input){
      window.fluid.showGrowlNotification(input);
    };
    break;
  case 'prism':
    // clear the cache first
    // window.platform.clearPrivateData();
    native.badge = function(text){
      if(typeof text == 'undefined'){
        return window.platform.icon().dockText;
      } else {
        window.platform.icon().badgeText = text;
      }
    };
    native.notify = function(input){
      window.platform.showNotification(input.title, input.description, input.icon);
    };
    break;
  default:
    native.badge = native.notify = function(){};
}
