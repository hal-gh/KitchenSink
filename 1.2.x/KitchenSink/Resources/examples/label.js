var win = Titanium.UI.currentWindow;

var l1 = Titanium.UI.createLabel({
	text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
	width:200,
	height:150,
	top:10,
	color:'#336699',
	textAlign:'center'
});

win.add(l1);

var l2 = Titanium.UI.createLabel({
	text:'Appcelerator',
	height:50,
	width:'auto',
	shadowColor:'#aaa',
	shadowOffset:{x:5,y:5},
	color:'#900',
	font:{fontSize:48},
	top:170,
	textAlign:'center'
});

win.add(l2);

var b1 = Titanium.UI.createButton({
	title:'Hide/Show',
	height:40,
	width:200,
	top:230
});
var visible=true;
b1.addEventListener('click', function()
{
	if (visible)
	{
		l1.hide();
		l2.hide();
		visible=false;
	}
	else
	{
		l1.show();
		l2.show();
		visible=true;
	}
});
win.add(b1);

var b2 = Titanium.UI.createButton({
	title:'Change Label 2',
	height:40,
	width:200,
	top:280
});
var changed=false;
b2.addEventListener('click', function()
{
	if (!changed)
	{
		l2.color = '#ff9900';
		l2.shadowColor = '#336699';
		l2.font = {fontSize:20};
		changed=true;
		size.text = l2.size.height + ' ' + l2.size.width
	}
	else
	{
		l2.color = '#900';
		l2.shadowColor = '#aaa';
		l2.font = {fontSize:48};
		size.text = l2.size.height + ' ' + l2.size.width
		changed=false;
	}
});
win.add(b2);

var size = Ti.UI.createLabel({
	height:30,
	width:300,
	font:{fontSize:14},
	color:'#777',
	bottom:10
});
win.add(size)