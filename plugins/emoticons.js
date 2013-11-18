exports.applyEmoticons = function(html){
	var patterns = {
		angry: /\&gt;:-o|\&gt;:o|\&gt;:-O|\&gt;:O|\&gt;:-\(|\&gt;:\(/g,
		naughty: /\&gt;:-\)|\&gt;:\)|\&gt;:-\&gt;|\&gt;:\&gt;/g,
		sick: /:-\&amp;|:\&amp;|=\&amp;|=-\&amp;|:-@|:@|=@|=-@/g,
		smile: /:-\)|:\)|=-\)|=\)/g,
		wink: /;-\)|;\)/g,
		frown: /:-\(|:\(|=\(|=-\(/g,
		ambivalent: /:-\||:\|/g,
		gasp: /:-O|:O|:-o|:o|=-O|=O|=-o|=o/g,
		laugh: /:-D|:D|=-D|=D/g,
		kiss: /:-\*|:\*|=-\*|=\*/g,
		yuck: /:-P|:-p|:-b|:P|:p|:b|=-P|=-p|=-b|=P|=p|=b/g,
		yum: /:-d|:d/g,
		grin: /\^_\^|\^\^|\^-\^/g,
		sarcastic: /:-\&gt;|:\&gt;|\^o\)/g,
		cry: /:'\(|='\(|:'-\(|='-\(/g,
		cool: /8-\)|8\)|B-\)|B\)/g,
		nerd: /:-B|:B|8-B|8B/g,
		innocent: /O:-\)|o:-\)|O:\)|o:\)/g,
		sealed: /:-X|:X|=X|=-X/g,
		footinmouth: /:-!|:!/g,
		embarrassed: /:-\[|:\[|=\[|=-\[/g,
		crazy: /%-\)|%\)/g,
		confused: /:-S|:S|:-s|:s|%-\(|%\(|X-\(|X\(/g,
		moneymouth: /:-\$|:\$|=\$|=-\$/g,
		heart: /\(L\)|\(l\)/g,
		thumbsup: /\(Y\)|\(y\)/g,
		thumbsdown: /\(N\)|\(n\)/g,
		"not-amused": /-.-\"|-.-|-_-\"|-_-/g,
		"mini-smile": /c:|C:|c-:|C-:/g,
		"mini-frown": /:c|:C|:-c|:-C/g,
		content: /:j|:J/g,
		hearteyes: /\&lt;3/g
	};
	
	var emoticHTML = "<span class='emoticon $emotic'></span>";
	
	for(var emotic in patterns) {
		html = html.replace(patterns[emotic],emoticHTML.replace("$emotic", "emoticon-" + emotic));
	}
	
	return html;
}