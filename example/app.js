function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

var indicator = require('de.marcelpociot.mwkprogress');
var progress = 0;

// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

var opts = {
  cancel: 6,
  options: ['Show', 'Dismiss', 'updateProgress', 'updateMessage', 'showSuccessMessage', 'showErrorMessage', 'Cancel'],
};

win.addEventListener('click', function(e){
  var dialog = Ti.UI.createOptionDialog(opts);
  dialog.show();
  dialog.addEventListener("click",function(e)
  {
  	switch( e.index )
  	{
  		case 0:
  			indicator.show();
  		break;
  		case 1:
  			progress = 0;
  			indicator.dismiss();
  		break;
  		case 2:
  			progress = progress + 0.1; 
  			indicator.updateProgress( progress );
  		break;
  		case 3:
  			indicator.updateMessage("We're nearly done");
  		break;
  		case 4:
  			indicator.showSuccessMessage("Yaaaay");
  		break;
  		case 5:
  			indicator.showErrorMessage("Booooooo!");
  		break
  	}
  });
});

win.open();