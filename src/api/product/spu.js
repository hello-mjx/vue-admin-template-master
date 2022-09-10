import request from '@/utils/request'
// 获取spu列表数据的接口
export const reqSpuList = (page, limit, category3Id) => request({url: `/admin/product/${page}/${limit}`, method: 'get', params:{category3Id}})
// 获取spu信息 
// /admin/product/getSpuById/{spuId}
export const reqSpu = (spuId) => request({url: `/admin/product/getSpuById/${spuId}`, method: 'get'})
// 获取品牌的信息
export const reqTradeMarkList = () => request({url: '/admin/product/baseTrademark/getTrademarkList', method: 'get'})
// 获取spu图片的接口
export const reqSpuImageList = (spuId) => request({url: `/admin/product/spuImageList/${spuId}`, method: 'get'})
// 获取平台全部销售属性 ---- 整个平台销售属性一共三个
export const reqBaseSaleAttrList = () => request({url:'/admin/product/baseSaleAttrList', method: 'get'})
// 修改spu或者是添加spu：对于修改或者添加，携带的参数大致是一样的，唯一的区别是携带的参数是否带id
export const reqAddOrUpdateSpu = (spuInfo) => {
    if(spuInfo.id) {
        return request({url: '/admin/product/updateSpuInfo', method: 'post', data: spuInfo})
    }else {
        return request({url: '/admin/product/saveSpuInfo', method: 'post', data: spuInfo})
    }
}
// 删除spu
export const reqDeleteSpu = (spuId) => request({url: `/admin/product/deleteSpu/${spuId}`, method: 'delete'})
// 获取图片接口
export const reqSpuImageLIst = (spuId) => request({url: `/admin/product/spuImageList/${spuId}`, method: 'get'})
// 获取销售属性的数据
export const reqSpuSaleAttrList = (spuId) => request({url: `/admin/product/spuSaleAttrList/${spuId}`, method: 'get'})
// 获取平台属性的数据
export const reqAttrInfoList = (category1Id, category2Id, category3Id) => request({url: `/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`, method: 'get'})
// 添加sku
export const reqAddSku = (skuInfo) => request({url: '/admin/product/saveSkuInfo', method: 'post', data: skuInfo})
// 获取spu列表数据的接口
export const reqSkuList = (spuId) => request({url: `/admin/product/findBySpuId/${spuId}`, method: 'get'})