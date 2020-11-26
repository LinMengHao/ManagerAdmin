import request from '@/utils/request'

export default{
    //添加课程基本信息
    addCourseInfo(courseInfo){
        return request({
            url:`/eduService/edu-course/addCourseInfo`,
            method:'post',
            data:courseInfo
        })
    },
    //讲师列表
    getListTeacher(){
        return request({
            url:`/eduService/findAll`,
            method:`get`
        })
    },
    //修改课程基本信息
    updateCourseInfo(courseInfo){
        return request({
            url:`/eduService/edu-course/updateCourseInfo`,
            method:'post',
            data:courseInfo
        })
    },
    //根据id查询课程基本信息
    getCourseInfoById(id){
        return request({
            url:`/eduService/edu-course/getCourseByCourseId/${id}`,
            method:'get'
        })
    },
    //课程确认信息
    getPublishCourseInfo(id){
        return request({
            url:`/eduService/edu-course/getPublishCourseInfo/${id}`,
            method:'get',
        })
    },
    //课程最终发布
    publishCourse(id){
        return request({
            url:`/eduService/edu-course/publishCourse/${id}`,
            method:'post'
        })
    },
    getCourseListPage(page,limit,courseQuery){
        return request({
            url:`/eduService/edu-course/pageCourseInfo/${page}/${limit}`,
            method:'post',
            data:courseQuery
        })
    },
    deleteCourseById(courseId){
        return request({
            url:`/eduService/edu-course/deleteCourse/${courseId}`,
            method:'delete'
        })
    }
}