//这个模块主要获取的是品牌管理的数据的模块
import request from '@/utils/request';
//获取品牌列表接口
///admin/product/baseTrademark/{page}/{limit}
export const reqTradeMarkList = (page, limit) => request({ url: `/admin/product/baseTrademark/${page}/${limit}`, method: 'get' });
// 处理添加品牌的操作
export const reqAddOrUpdateTradeMark = (trademark) => {
    // 带给服务器数据携带ID--修改
    if(trademark.id) {
        return request({url: '/admin/product/baseTrademark/update', method: 'put', data: trademark})
    }else { 
        return request({url: '/admin/product/baseTrademark/save', method: 'get', data: trademark})
    }
}
// 删除品牌
export const reqDeleteTradeMark = (id) => request({url: `/admin/product/baseTrademark/remove/${id}`, method: 'delete'})