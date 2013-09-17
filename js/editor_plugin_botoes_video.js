(function() {
	tinymce.create('tinymce.plugins.YourVideos', {
		init : function(ed, url) {
			ed.addButton('youryoutube', {
				title : 'Embed de vídeo do YouTube',
				image : url+'/../images/youtube.png',
				onclick : function() {
					idPattern = /(?:(?:[^v]+)+v.)?([^&=]{11})(?=&|$)/;
					var vidId = prompt("Vídeo do YouTube", "URL do vídeo");
					var m = idPattern.exec(vidId);
					if (m != null && m != 'undefined')
						//ed.execCommand('mceInsertContent', false, '[youtube id="'+m[1]+'"]');
						ed.execCommand('mceInsertContent', false, 'http://www.youtube.com/watch?v='+m[1]);						
				}
			});
			ed.addButton('yourvimeo', {
				title : 'Embed de vídeo do Vimeo',
				image : url+'/../images/vimeo.png',
				onclick : function() {
					idPattern = /(?:(?:[^v]+)+v.)?([^&=]{11})(?=&|$)/;
					var vidId = prompt("Vídeo do Vimeo ", "URL do vídeo");
					//var m = vidId;
					if (vidId != null && vidId != 'undefined')
						//ed.execCommand('mceInsertContent', false, '[Vimeo id="'+m[1]+'"]');
						ed.execCommand('mceInsertContent', false, vidId);						
				}
			});
		},
		createControl : function(n, cm) {
			return null;
		},
		getInfo : function() {
			return {
				longname : "YouTube Shortcode",
				author : 'Brett Terpstra',
				authorurl : 'http://brettterpstra.com/',
				infourl : 'http://brettterpstra.com/',
				version : "1.0"
			};
		}
	});
	tinymce.PluginManager.add('yourvideos', tinymce.plugins.YourVideos);
})();