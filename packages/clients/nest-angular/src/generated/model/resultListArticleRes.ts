/**
 * rest api interface
 * 项目标准接口
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ArticleRes } from './articleRes';
import { Query } from './query';


/**
 * 
 */
export interface ResultListArticleRes { 
    /**
     * 
     */
    list: Array<ArticleRes>;
    /**
     * 
     */
    count?: number;
    query?: Query;
}
