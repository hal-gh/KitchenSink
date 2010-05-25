var win = Titanium.UI.currentWindow;

if (Ti.Network.networkTypeName == 'NONE') {
	var noNetworkMsg = Ti.UI.createLabel({
		text: "Note: There is currently no internet connection, so you won't be able to see the initial image",
		bottom: 20,
		color: '#999',
		height: 'auto',
		font:{fontSize:10},
		width: 300,
		textAlign: 'center'
	});
	win.add(noNetworkMsg);
}
var imageView = Titanium.UI.createImageView({
	url:'http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png',
	width:261,
	height:178,
	top:20
});

imageView.addEventListener('load', function()
{
	Ti.API.info('LOAD CALLED');
});
win.add(imageView);

var l = Titanium.UI.createLabel({
	text:'Click Image',
	color:'#ccc',
	height:'auto',
	top: 350,
	width:300,
	textAlign:'center'
});
win.add(l);

function clicker()
{
	Titanium.UI.createAlertDialog({title:'Image View', message:'You clicked the image!'}).show();
	l.text = "The image should have changed. This time if you click it, you won't get an alert.";
	imageView.url = '../images/cloud.png';
	imageView.removeEventListener('click',clicker);
}

imageView.addEventListener('click', clicker);