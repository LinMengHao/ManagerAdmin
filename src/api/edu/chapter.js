import request from '@/utils/request'

export default{
    //根据课程id获取章节小节
    getAllChapterVideo(courseId){
        return request({
            url:`/eduService/edu-chapter/getChapterVideo/${courseId}`,
            method:'get'
        })
    },
    //添加章节
    addChapter(chapter){
        return request({
            url:`/eduService/edu-chapter/addChapter`,
            method:'post',
            data:chapter
        })
    },
    //修改章节
    updateChapter(chapter){
        return request({
            url:`/eduService/edu-chapter/updateChapter`,
            method:'post',
            data:chapter
        })
    },
    //根据id查询
    getChapter(chapterId){
        return request({
            url:`/eduService/edu-chapter/getChapterInfo/${chapterId}`,
            method:'get'
        })
    },
    deleteChapter(chapterId){
        return request({
            url:`/eduService/edu-chapter/deleteChapter/${chapterId}`,
            method:'delete'
        })
    }
}