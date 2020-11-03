function export2Word(element) {

	var html, link, blob, url, css;

	css = ('<style>'
			+ '@page WordSection1{size: 841.95pt 595.35pt;mso-page-orientation: landscape;}'
			+ 'div.WordSection1 {page: WordSection1;}' + '</style>');
	

	var centerAligned = document.getElementsByClassName("sm-align-center");
	  for (var i=0, max=centerAligned.length; i < max; i++) {
	    centerAligned[i].style = "text-align: center;"
	  }
	  
	html = element.innerHTML;
	blob = new Blob([ '\ufeff', css + html ], {
		type : 'application/msword'
	});
	url = URL.createObjectURL(blob);
	link = document.createElement('A');
	link.href = url;
	link.download = 'Document'; // default name without extension
	document.body.appendChild(link);
	if (navigator.msSaveOrOpenBlob)
		navigator.msSaveOrOpenBlob(blob, 'Document.doc'); // IE10-11
	else
		link.click(); // other browsers
	document.body.removeChild(link);
};