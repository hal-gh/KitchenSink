var win = Titanium.UI.currentWindow;

if (Ti.Network.networkTypeName == 'NONE') {
	var noNetworkMsg = Ti.UI.createLabel({
		text: "Note: There is currently no internet connection, so you won't be able to see the image",
		bottom: 20,
		color: '#999',
		height: 'auto',
		font:{fontSize:11},
		width: 300,
		textAlign: 'center'
	});
	win.add(noNetworkMsg);
} else {
	var imageView = Titanium.UI.createImageView({
		url:'http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png',
		top:20,
		width:100,
		height:100
	});
	
	win.add(imageView);
	
	var l = Titanium.UI.createLabel({
		text:'This is a remote image URL',
		bottom:30,
		color:'#999',
		height:20,
		top: 350,
		width:300,
		textAlign:'center'
	});
	win.add(l);
}
