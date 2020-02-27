window.onload = main;

function createAgent() {
	function requestBy(method) {
		return function(url) {
			let xhr = new XMLHttpRequest();
			return new Promise((resolve, reject) => {
				xhr.open(method, url);
				xhr.onload = function() {
					resolve({
						status: xhr.status,
						response: xhr.response
					});
				};
				xhr.onerror = function(err) {
					reject(err);
				};
				xhr.send();
			});
		};
	}
	return {
		get: requestBy('GET')
	};
}

function main() {

	function createElementBuilder() {
		const element = document.createElement('div');
		function createElement(htmlText) {
			element.innerHTML = htmlText;
			return element.firstChild;
		}
		return createElement;
	}
	function $(elem) {
		function CustomElement(elem) {
			this.elem = elem;
		}
		Object.assign(CustomElement.prototype, {
			on: function(name, fn) {
				this.elem.addEventListener(name, fn);
			},
			off: function(name, fn) {
				this.elem.removeEventListener(name, fn);
			},
			click: function(fn) {
				this.on('click', fn);
			}
		});
		function $$(elem) {
			return elem instanceof CustomElement ? elem : new CustomElement(elem);
		}
		return $$(elem);
	}
	const ce = createElementBuilder();

	const BasePath = 'docs/javascript';
	const Docs = [
	'1-Basic.md',
	'2-Array.md',
	'3-Object.md',
	'4-Functions.md',
	'5-Prototype and Class.md'
	];

	const agent = createAgent();
	const contentElement = ce('<div class="content"/>');
	function displayMarkdown(mdText) {
		const md = markdownit({
			highlight: function (str, lang) {
				if (lang && hljs.getLanguage(lang)) {
					try {
						return hljs.highlight(lang, str).value;
					} catch (__) {}
				}
				return '';
			}
		});
		const html = md.render(mdText);
		contentElement.innerHTML = html;
	}
	function createDropDown(items, onClick) {
		const element = ce('<div class="menu"></div>');
		items.forEach((item, index) => {
			const itemElement = ce(`<div class="mitem">${item}</div>`);
			$(itemElement).on('click', () => {
				navigateTo(index);
				onClick && onClick(item, index);
			});
			element.append(itemElement);
		});
		return element;
	}
	function makeStyles(styles) {
		const styleElement = ce('<style/>');
		let css = '';
		function addAttr(attrMap) {
			for(let key in attrMap) {
				let attrVal = attrMap[key];
				css += key.replace(/[A-Z]/g, (i) => '-'+i.toLowerCase()) + ':' + attrVal + ';';
			}
		}
		for(let key in styles) {
			css += '.' + key + '{';
			addAttr(styles[key]);
			css += '}';
		}
		styleElement.innerText = css;
		document.head.append(styleElement);
	}
	makeStyles({
		content: {
			margin: '8px'
		}
	});
	makeStyles({
		menu: {
			position: 'absolute',
			left: '40px',
			top: '12px',
			backgroundColor: 'white',
			border: '1px solid #eee',
			padding: '4px',
			borderRadius: '4px'
		}
	});
	makeStyles({
		mitem: {
			cursor: 'pointer',
			fontSize: '18px',
			fontWeight: 'bold'
		}
	});
	function makeMenu() {
		let menu = null;
		makeStyles({
			menuToggle: {
				cursor: 'pointer',
				border: '1px solid #eee',
				borderRadius: '4px'
			}
		});
		function toggleMenu() {
			function open() {
				menu = createDropDown(Docs, (item, i) => {
					close();
				});
				document.body.append(menu);
			}
			function close() {
				menu.remove();
				menu = null;
			}
			menu ? close() : open();
		}
		const menuElement = ce('<div class="menuToggle"><img alt="" src="images/menu-24px.svg"/></div>');
		$(menuElement).click(() => {
			toggleMenu();
		});
		document.body.append(menuElement);
		return {
			open: open,
			close: close,
			toggle: toggleMenu
		};
	}
	const menuAPI = makeMenu();
	document.body.append(contentElement);
	async function navigateTo(docIndex) {
		const data = await agent.get(`${BasePath}/${Docs[docIndex]}`);
		displayMarkdown(data.response);
	}

	navigateTo(0);

}
