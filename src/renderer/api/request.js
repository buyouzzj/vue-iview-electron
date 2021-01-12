import ajax from './ajax'
// import { baseUrl } from '../config'
const baseUrl = process.env.BASE_URL

export const getBasicInfo = (params) => ajax({ url: baseUrl + '/api/portrait/baseInfoNew', params, method: 'get' })
