import { AxiosRequestConfig } from 'axios';
declare const _default: (url: string, config?: AxiosRequestConfig) => Promise<{
    title: any;
    description: any;
    link: any;
    image: any;
    category: any;
    items: any[];
}>;
export default _default;
export declare const parseFromString: (data: string) => Promise<{
    title: any;
    description: any;
    link: any;
    image: any;
    category: any;
    items: any[];
}>;
