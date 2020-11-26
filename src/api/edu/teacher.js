import request from '@/utils/request'

export default{
    //1.讲师列表（条件分页查询）
    //current当前页,limit，每页记录数,teacherQuery查询条件
    getTeacherListPage(current,limit,teacherQuery){
        return request({
            //url: '/eduService/pageTeacherCondition',
            url:`/eduService/pageTeacherCondition/${current}/${limit}`,
            method: 'post',
            //teacherQuery条件的对象，后端使用RequestBody获取数据
            //data:表示把数据已json方式传递到接口
            data:teacherQuery
          })
    },
    //删除讲师
    deleteTeacherById(id){
        return request({
            url:`/eduService/deleteTeacher/${id}`,
            method:'delete'
        })
    },
    //添加讲师
    addTeacher(teacher){
        return request({
            url:`/eduService/addTeacher`,
            method:'post',
            data:teacher
        })
    },
    //返回讲师信息
    getTeacherInfo(id){
        return request({
            url:`/eduService/getTeacher/${id}`,
            method:'get'
        })
    },
    //修改讲师
    updateTeacher(teacher){
        return request({
            url:`/eduService/updateTeacher`,
            method:'post',
            data:teacher
        })
    }
}
