<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/5/5
 * Time: 9:01
 */

namespace app\focusPc\controller;
use think\Controller;
use think\Db;

class Online extends Controller
{
    public function index($sortid=0){
        //banner
        $banner=Db::table('banner')->where('url','<>',' ')->limit(2)->order('id','desc')->select();
        $this->assign('bannerAraay',$banner);
        //老师种类查询
        $teachersort=Db::table('teachersort')->where('name','<>',' ')->select();
        $this->assign('teachersort',$teachersort);
        //学生种类查询
        $studentsort=Db::table('studentsort')->where('name','<>',' ')->select();
        $this->assign('studentsort',$studentsort);
        //设备种类查询
        $equipmentsort=Db::table('equipmentsort')->where('name','<>',' ')->select();
        $this->assign('equipmentsort',$equipmentsort);
        //成功案例种类查询
        $casesort=Db::table('casesort')->where('name','<>',' ')->select();
        $this->assign('casesort',$casesort);
        //技术中心种类查询
        $technologysort=Db::table('technologysort')->where('name','<>',' ')->select();
        $this->assign('technologysort',$technologysort);
        //取出关于我们
        $us=Db::table('contactus')->where('id','1')->find();
        $this->assign('us',$us);


        return $this->fetch();
    }

    //留言 提交到数据库
    public function post(){
        if(!trim($_POST['des'])){
            $this->error('请填写您的需求信息！');
        }
        if($_POST['name']){
            $name=$_POST['name'];
        }else{
            $name="匿名";
        }
        if($_POST['phone']){
            $phone=$_POST['phone'];
        }else{
            $phone="未填写";
        }
        if($_POST['email']){
            $email=$_POST['email'];
        }else{
            $email="未填写";
        }

        $data = ['name' => $name,'phone'=>$phone, 'email' => $email,'des'=>$_POST['des']];
        Db::table('online')->insert($data);
        $this->redirect('{$Think.server.script_name}/focusPc/index/index');
    }
}