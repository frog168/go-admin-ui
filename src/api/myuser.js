import request from '@/utils/request'

// 查询MyUser列表
export function listMyUser(query) {
  return request({
    url: '/api/v1/myuser',
    method: 'get',
    params: query
  })
}

// 查询MyUser详细
export function getMyUser(ID) {
  return request({
    url: '/api/v1/myuser/' + ID,
    method: 'get'
  })
}

// 新增MyUser
export function addMyUser(data) {
  return request({
    url: '/api/v1/myuser',
    method: 'post',
    data: data
  })
}

// 修改MyUser
export function updateMyUser(data) {
  return request({
    url: '/api/v1/myuser/' + data.ID,
    method: 'put',
    data: data
  })
}

// 删除MyUser
export function delMyUser(data) {
  return request({
    url: '/api/v1/myuser',
    method: 'delete',
    data: data
  })
}

