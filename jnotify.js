/*	
	@Written by: Evans Anyokwu
	@Version 0.1
	 
*/

var cbNotifications = 0;
function jNotify(m,t,d){
	var colorScheme = '';
	switch (t){
		case 'error':
		case 'failed':
			colorScheme =  'border-top:4px solid #ff0000; background: #ffd2d2; color:#ff0000;';
		break;
		case 'success':
			colorScheme = 'border-top:4px solid #14e51e; background: #cfffd1; color:#14e51e;';
		break;
		case 'shape':
		default:
			colorScheme = 'border-top:4px solid #b200b8; background: #fee8ff; color:#b200b8;';
		break;
	}
	var duration = (d==undefined) ? 2000 : d;
	
	if ($('#cbNotice-'+cbNotifications).length){
		$('#cbNotice-'+cbNotifications).remove();
	}
	
	cbNotifications++;
	$('body').append('<div id="cbNotice-'+cbNotifications+'" style="-moz-border-radius-topright: 2em; -moz-border-radius-topleft: 2em;z-index:10000; font-weight:bold; opacity:0.9; '+colorScheme+' height:auto; position:fixed; bottom:0px; left:0px; width:100%; text-align:center; display:none;" onclick="$(this).slideUp(\'fast\');"></div>');
	
	$('#cbNotice-'+cbNotifications).html('<br/><span style="font-size:20px !important; opacity:1;">'+m+'</span><br/>&nbsp;');
		$('#cbNotice-'+cbNotifications).slideDown('fast',function(){
			var text = "$('#cbNotice-"+cbNotifications+"').slideUp('fast');";
			if (duration>0){
				setTimeout (text,duration);
			}
		});
}