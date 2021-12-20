/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
'use strict';

function insertAtCursor(myField, myValue) {
	var textTop = myField.scrollTop;
	var documentTop = document.documentElement.scrollTop;

	//IE 浏览器
	if (document.selection) {
		myField.focus();
		var sel = document.selection.createRange();
		sel.text = myValue;
		sel.select();
	}

	//FireFox、Chrome等
	else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;

		myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);

		myField.focus();
		myField.selectionStart = startPos + myValue.length;
		myField.selectionEnd = startPos + myValue.length;
	} else {

		myField.value += myValue;
		myField.focus();
	}

	myField.scrollTop = textTop;
	document.documentElement.scrollTop = documentTop;
}

var _createClass = function() {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}
		return function(Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

(function() {
	var OwO = function() {
			function OwO(option) {
				var _this = this;

				_classCallCheck(this, OwO);

				var defaultOption = {
					logo: '<svg t="1629177007629" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9553" width="20" height="20"><path d="M563.2 463.3L677 540c1.7 1.2 3.7 1.8 5.8 1.8 0.7 0 1.4-0.1 2-0.2 2.7-0.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6 0.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-0.7-0.1-1.3-0.2-2-0.2-2.1 0-4.1 0.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5 0.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4z m333.8 241.3l-41-20a10.3 10.3 0 0 0-8.1-0.5c-2.6 0.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7 0.5-9.9 5.5-9.5 11.2l3.9 45.5c0.5 5.3 5 9.5 10.3 9.5h0.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 0.3-11.2-4.8-13.6z m186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3 0.1 0.2 0.3 0.3 0.4 0.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129z m-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-0.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z" p-id="9554" fill="#515151"></path></svg>',
					container: document.getElementsByClassName('OwO')[0],
					target: document.getElementsByClassName('OwO-textarea')[0],
					position: 'up',
					width: '450px',
					maxHeight: '250px',
					api: 'https://api.anotherhome.net/OwO/OwO.json'
				};
				for (var defaultKey in defaultOption) {
					if (defaultOption.hasOwnProperty(defaultKey) && !option.hasOwnProperty(defaultKey)) {
						option[defaultKey] = defaultOption[defaultKey];
					}
				}
				this.container = option.container;
				this.target = option.target;
				if (option.position === 'up') {
					this.container.classList.add('OwO-up');
				}

				var xhr = new XMLHttpRequest();
				xhr.onreadystatechange = function() {
					if (xhr.readyState === 4) {
						if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
							_this.odata = JSON.parse(xhr.responseText);
							_this.init(option);
						} else {
							console.log('OwO data request was unsuccessful: ' + xhr.status);
						}
					}
				};
				xhr.open('get', option.api, true);
				xhr.send(null);
			}

			_createClass(OwO, [{
				key: 'init',
				value: function init(option) {
					var _this2 = this;

					this.area = option.target;
					this.packages = Object.keys(this.odata);

					// fill in HTML
					var html = '\n            <div class="OwO-logo"><span>' + option.logo + '</span></div>\n            <div class="OwO-body" style="">';

					for (var i = 0; i < this.packages.length; i++) {

						html += '\n                <ul class="OwO-items OwO-items-' + this.odata[this.packages[i]].type + '" style="max-height: ' + (parseInt(option.maxHeight) - 53 + 'px') + ';">';
						var type = this.odata[this.packages[i]].type;
						var opackage = this.odata[this.packages[i]].container;



						for (var _i = 0; _i < opackage.length; _i++) {
							if (type == "image") {
								var strJsPath = '';
								(function() {
									try {
										throw Error("获取JS路径有误");
									} catch (ex) {
										if (ex.fileName) //Firefox
										strJsPath = ex.fileName
										else if (ex.stack) //Chrome
										strJsPath = (ex.stack.match(/at\s+(.*?):\d+:\d+/) || ['', ''])[1];
										else if (ex.sourceURL) //Safari
										strJsPath = ex.sourceURL
									}
									if (strJsPath) return; //其实所有浏览器都可以用下面的
									var scripts = document.getElementsByTagName_r("script"),
										script = scripts[scripts.length - 1];
									strJsPath = document.querySelector ? script.src : script.getAttribute("src", 4) //IE8直接.src
								})()
								strJsPath = strJsPath.replace(/OwO.js/, "")
								var icon = opackage[_i].icon;
								html += '\n<li class="OwO-item" data-id="' + opackage[_i].data + '" title="' + opackage[_i].text + '">' + '<img src="' + opackage[_i].icon + '"/>' + '</li>';
							} else {
								html += '\n<li class="OwO-item" data-id="not-given" title="' + opackage[_i].text + '">' + opackage[_i].icon + '</li>';
							}
						}

						html += '\n                </ul>';
					}

					html += '\n                <div class="OwO-bar">\n                    <ul class="OwO-packages">';

					for (var _i2 = 0; _i2 < this.packages.length; _i2++) {

						html += '\n                        <li><span>' + this.packages[_i2] + '</span></li>';
					}

					html += '\n                    </ul>\n                </div>\n            </div>\n            ';
					// console.log(html)
					this.container.innerHTML = html;

					// bind event
					this.logo = this.container.getElementsByClassName('OwO-logo')[0];
					this.logo.addEventListener('click', function() {
						_this2.toggle();
					});

					this.container.getElementsByClassName('OwO-body')[0].addEventListener('click', function(e) {
						var target = null;
						if (e.target.classList.contains('OwO-item')) {
							target = e.target;
						} else if (e.target.parentNode.classList.contains('OwO-item')) {
							target = e.target.parentNode;
						}
						if (target) {
							var cursorPos = _this2.area.selectionEnd;
							var areaValue = _this2.area.value;
							if (target.dataset.id == "not-given") {
								insertAtCursor(_this2.area, ' ' + target.innerHTML + ' ');
								//_this2.area.value = areaValue.slice(0, cursorPos) + target.innerHTML + areaValue.slice(cursorPos) + ' ';
							} else {
								insertAtCursor(_this2.area, ' ' + target.dataset.id + ' ');
								//_this2.area.value = areaValue.slice(0, cursorPos) + target.dataset.id + areaValue.slice(cursorPos) + ' ';
							}
							_this2.area.focus();
							_this2.toggle();
						}
					});

					this.packagesEle = this.container.getElementsByClassName('OwO-packages')[0];

					var _loop = function _loop(_i3) {
							(function(index) {
								_this2.packagesEle.children[_i3].addEventListener('click', function() {
									_this2.tab(index);
								});
							})(_i3);
						};

					for (var _i3 = 0; _i3 < this.packagesEle.children.length; _i3++) {
						_loop(_i3);
					}

					this.tab(0);
				}
			}, {
				key: 'toggle',
				value: function toggle() {
					if (this.container.classList.contains('OwO-open')) {
						this.container.classList.remove('OwO-open');
					} else {
						this.container.classList.add('OwO-open');
					}
				}
			}, {
				key: 'tab',
				value: function tab(index) {
					var itemsShow = this.container.getElementsByClassName('OwO-items-show')[0];
					if (itemsShow) {
						itemsShow.classList.remove('OwO-items-show');
					}
					this.container.getElementsByClassName('OwO-items')[index].classList.add('OwO-items-show');

					if (!this.container.getElementsByClassName('OwO-items')[index].classList.contains('OwO-image-items-load') && this.container.getElementsByClassName('OwO-items')[index].classList.contains('OwO-items-image')) {
						this.container.getElementsByClassName('OwO-items')[index].classList.add('OwO-image-items-load');
						var imgs = this.container.getElementsByClassName('OwO-items')[index].getElementsByTagName('img');
						for (var i = 0; i < imgs.length; i++) {
							//imgs[i].setAttribute('src', imgs[i].dataset.src);
						}
					}

					var packageActive = this.container.getElementsByClassName('OwO-package-active')[0];
					if (packageActive) {
						packageActive.classList.remove('OwO-package-active');
					}
					this.packagesEle.getElementsByTagName('li')[index].classList.add('OwO-package-active');
				}
			}]);

			return OwO;
		}();

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = OwO;
	} else {
		window.OwO = OwO;
	}
})();