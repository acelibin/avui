import npmComAlert from './index.vue';

npmComAlert.install = function (Vue) {
  const AlertConstructor = Vue.extend(npmComAlert)
  // 生成一个该子类的实例
  const instance = new AlertConstructor();

  // 将这个实例挂载在我创建的div上
  // 并将此div加入全局挂载点内部
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法 
  Vue.prototype.$alert = (options) => {
    return instance.alert(options);
  }
}

export default npmComAlert;