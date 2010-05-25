var win = Titanium.UI.currentWindow;

if (Ti.Network.networkType == Ti.Network.NETWORK_NONE) {
	var noNetworkMsg = Ti.UI.createLabel({
		text: "Note: There is currently no internet connection, so you won't be able to see the image",
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
	url:'http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png'
});

win.add(imageView);

var l = Titanium.UI.createLabel({
	text:'',
	bottom:30,
	color:'#999',
	height:20,
	width:300,
	textAlign:'center'
});
win.add(l);

setTimeout(function() {
	// wait for URL to load
	var blob = imageView.toBlob();
	l.text = blob.width + "x" + blob.height;
}, 2000);


