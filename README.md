### 介绍
Vue.js+bootstrap的简单应用，包含的主要功能是：展示用户，新增用户，删除用户。

### 准备内容
[安装Vue.js](https://cn.vuejs.org/v2/guide/installation.html)，[安装boostrap](https://v3.bootcss.com/getting-started/#download)

### 项目分析
页面源码如下：

```
<div class="container">
	<h2 class="text-center">添加用户</h2>
	<form class="form-horizontal">
		<div class="form-group">
			<label for="name" class="control-label col-sm-2 col-sm-offset-2">姓 名：</label>
			<div class="col-sm-6">
				<input type="text" class="form-control" id="name" v-model="user.name" placeholder="请输入姓名"/>
			</div>
		</div>
		<div class="form-group">
			<label for="age" class="control-label col-sm-2 col-sm-offset-2">年龄：</label>
			<div class="col-sm-6">
				<input type="text" class="form-control" id="age" v-model="user.age"  placeholder="请输入年龄"/>
			</div>
		</div>
		<div class="form-group">
			<label for="email" class="control-label col-sm-2 col-sm-offset-2">邮 箱：</label>
			<div class="col-sm-6">
				<input type="text" class="form-control" id="age" v-model="user.email" placeholder="请输入邮箱"/>
			</div>
		</div>
		<div class="form-group text-center">
			<input type="button" value="添 加" class="btn btn-primary" v-on:click="addUser">
			<input type="reset" value="重置" class="btn btn-primary">
		</div>
	</form>
	<hr>
	<table class="table table-bordered table-hover">
		<caption class="h3 text-center text-info">用户列表</caption>
		<thead>
			<tr>
				<th class="text-center">序号</th>
				<th class="text-center">姓名</th>
				<th class="text-center">年龄</th>
				<th class="text-center">邮箱</th>
				<th class="text-center">操作</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(user,index) in users" class="text-center">
				<td>{{index+1}}</td>
				<td>{{user.name}}</td>
				<td>{{user.age}}</td>
				<td>{{user.email}}</td>
				<td><button class="btn btn-danger btn-sm" data-toggle="modal" data-target="#del" v-on:click="nowIndex=index">删除</button></td>
			</tr>
			<tr>
				<td colspan="5" class="text-right">
					<button class="btn btn-danger btn-sm" data-toggle="modal" data-target="#del" v-on:click="nowIndex=-1">删除所有</button>
				</td>
			</tr>
		</tbody>
	</table>
	<!-- 模态框，弹出框 -->
	<div class="modal" id="del">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button class="close" data-dismiss="modal">
						<span>&times</span>
					</button>
					<h4 class="modal-title text-center" v-show="nowIndex !== -1">确认要删除用户 {{users[nowIndex] ? users[nowIndex].name : ''}} 吗？</h4>
					<h4 class="modal-title text-center" v-show="nowIndex === -1">确认要删除所有用户吗？</h4>
				</div>
				<div class="modal-body text-center">
					<button class="btn btn-primary" data-dismiss="modal">取消</button>
					<button class="btn btn-primary" data-dismiss="modal" v-on:click="deleteUser">确认</button>
				</div>
			</div>
		</div>
	</div>
```
点击删除按钮，调用 deleteUser()方法，点击单个删除和所有删除使nowIndex发生变化，使用splice()函数删除数组中的元素。
 
 Vue 实例:
 
```
let vm = new Vue({
	    el:'.container',
	    data:{   //存储数据
			users:[
				{name:'tom',age:24,email:"tom@sina.com"},
				{name:'jack',age:21,email:"jack@sina.com"}
			],
		    user:{},
		    nowIndex:-1 //当前要删除项的索引
	    },
	    methods:{  //存储方法
			addUser(){
			    this.users.push(this.user);
			},
		    deleteUser(){
			    if(this.nowIndex === -1){
			        this.users=[]; 
			    }else{
                    this.users.splice(this.nowIndex,1);
			    }
		    }
	    }
    });
```

### [完整源码](https://github.com/serioxiao/project)
