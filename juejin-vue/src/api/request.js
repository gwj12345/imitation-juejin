/**
 * axios 二次封装
 * @date 23/02/11
 * @author gwj
 */

import axios from "axios";

// 创建axios实例对象，添加全局配置
const baseApi = 'http://win.gwj1314.cn:1337/api';
const service = axios.create({
    baseURL: baseApi,
    timeout: 8000,
});

// 请求拦截
service.interceptors.request.use((req) => {
    return req;
});

// 响应拦截
service.interceptors.response.use((res) => {
    console.log(res.data.data);
    return res.data.data;
});

// 请求函数
function request(options) {
    options.method = options.method || "get";
    if (options.method.toLowerCase() === "get") {
        options.params = options.data;
    }
    return service(options);
}

["get", "post", "put", "delete", "patch"].forEach((item) => {
    request[item] = (url, data) => {
        return request({
            url,
            data,
            method: item,
        });
    };
});

export default request;




