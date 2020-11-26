import request from '@/utils/request'

export default{
    //添加课程基本信息
    addVideo(video){
        return request({
            url:`/eduService/edu-video/addVideo`,
            method:'post',
            data:video
        })
    },
    updateVideo(video){
        return request({
            url:`/eduService/edu-video/updateVideo`,
            method:'post',
            data:video
        })
    },
    deleteVideo(id){
        return request({
            url:`/eduService/edu-video/deleteVideo/${id}`,
            method:'delete'
        })
    },
    getVideo(id){
        return request({
            url:`/eduService/edu-video/getVideoInfo/${id}`,
            method:'get'
        })
    },
    deleteAlyVod(videoSourceId){
        return request({
            url:`/eduVod/deleteAlyVideo/${videoSourceId}`,
            method:'delete'
        })
    }
}