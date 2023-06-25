'use strict';
'require baseclass';
'require fs';
'require rpc';


var callSystemBoard = rpc.declare({
	object: 'system',
	method: 'board'
});
var callSystemInfo = rpc.declare({
	object: 'system',
	method: 'info'
});
return baseclass.extend({
	title: _('System'),
	load: function() {
		return Promise.all([L.resolveDefault(callSystemBoard(), {}), L.resolveDefault(callSystemInfo(), {}), fs.lines('/usr/lib/lua/luci/version.lua')]);},

render: function(data) 		
{var boardinfo = data[0],
	systeminfo = data[1],
	luciversion = data[2];
	luciversion = luciversion.filter(function(l) {
		return l.match(/^\s*(luciname|luciversion)\s*=/);
		}).map(function(l) {
		return l.replace(/^\s*\w+\s*=\s*['"]([^'"]+)['"].*$/, '$1');
		}).join(' ');
		
 var datestr = null;
		if (systeminfo.localtime) 
		
{var date = new Date(systeminfo.localtime * 1000);
			datestr = '%04d-%02d-%02d %02d:%02d:%02d'.format(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
}



var fields=[
_('Model'),"S905X B860H v1",
_('Firmware Version'),(L.isObject(boardinfo.release)?boardinfo.release.description+'  ':'')+(luciversion||''),
_('Kernel Version'),"5.4.204",
_('Local Time'),datestr,
_('Uptime'),systeminfo.uptime?'%t'.format(systeminfo.uptime):null,
_("Temperature"), tempcpu,
_("CPU Usage"), cpuusage,
_("Openclash"), _clash,
_("Zerotier"), zerotier_status,
_("ip"), ip,
_("host"), isp,
_("lokasi"), address,	

];

var table=E('table',{'class':'table'});for(var i=0;i<fields.length;i+=2){table.appendChild(E('tr',{'class':'tr'},[E('td',{'class':'td left','width':'33%'},[fields[i]]),E('td',{'class':'td left'},[(fields[i+1]!=null)?fields[i+1]:'?'])]));}
return table;}});

