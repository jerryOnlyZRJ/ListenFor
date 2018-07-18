//			初始化字体
const fonts = [false, 'SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong', 'Arial', 'Times-New-Roman'];
const Font = Quill.import('formats/font');
Font.whitelist = fonts;
Quill.register(Font, true);
//			初始化字号
const sizes = [false, "3.5rem", "3rem", "2.125rem", "2rem", "1.8125rem", "1.5rem", "1.3125rem", "1.25rem", "1.125rem", "1rem", "0.875rem", "0.75rem", "0.625rem", "0.5rem", "0.4375rem", "0.375rem"]
const Size = Quill.import('attributors/style/size');
Size.whitelist = sizes;
Quill.register(Size, true);
const toolbarOptions = [
	[{
		'font': fonts
	}, {
		'size': sizes
	}],
	['bold', 'italic', 'underline', {
		'color': []
	}, {
		'background': []
	}],
	[{
		'list': 'ordered'
	}, {
		'list': 'bullet'
	}, {
		'direction': 'rtl'
	}, {
		'align': []
	}]
]
var quill = new Quill('#quill-container', {
	modules: {
		toolbar: toolbarOptions
	},
	theme: 'snow'
});