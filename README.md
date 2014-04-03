TiMWKProgressIndicator
===========================================


A minimal progress indicator for iOS with status update support. Displays above UINavigationBar and below the Status Bar.


<img src="images/demo.gif" />

### Usage

	var indicator = require('de.marcelpociot.mwkprogress');

	indicator.show();
	indicator.updateMessage("We're nearly done");
	indicator.updateProgress( 0.5 );

## Functions


#### show

Shows the progress indicator.

#### dismiss

Dismiss the progress indicator.


#### updateProgress
Option

Type: `Float`  

Progress to display from 0.0 to 1.0.

#### updateMessage
Option

Type: `String`  

Updates the displayed message.


#### showSuccessMessage
Option

Type: `String`  

Show a success indicator with the specified message.

#### showErrorMessage
Option

Type: `String`  

Show an error indicator with the specified message.


ABOUT THE AUTHOR
========================
I'm a web enthusiast located in Germany and in charge of http://www.titaniumcontrols.com

Follow me on twitter: @marcelpociot / @TitaniumCTRLs