import Vue from 'vue';
import main from './toast.vue';
import {
	isVNode
} from '../../utils/vdom.js';
import {
	isObject
} from "../../utils/types.js";

let ToastConstructor = Vue.extend(main);

let instance;
let instances = [];
let seed = 1;

const Toast = function(options) {
	//判断代码是否在服务器上运行
	if (Vue.prototype.$isServer) return;
	options = options || {};
	if (typeof options === 'string') {
		options = {
			message: options
		}
	}
	let userOnClose = options.onClose
	let id = 'toast_' + seed++;

	options.onClose = function() {
		Toast.close(id, userOnClose);
	}

	instance = new ToastConstructor({
		data: options
	})
	
	instance.id = id;
	if (isVNode(instance.message)) {
		console.log(instance.message)
	}
	//挂载实例
	instance.$mount()
	instance.visible = true
	document.body.appendChild(instance.$el);
	instances.push(instance)
	return instance;
};

export default Toast
