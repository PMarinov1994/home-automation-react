import { INIT_DATA, APPEND_DATA } from './actionTypes';
import { RestApiData } from '../types/restAPI'

export interface IBaseAction {
    type: string
}

export interface IInitDataAction extends IBaseAction {
    payload: RestApiData[]
}

export interface IAppendDataAction extends IBaseAction {
    payload: RestApiData
}

export type AppActions = IInitDataAction | IAppendDataAction;

export const initData = (initialData: RestApiData[]): IInitDataAction => ({
    type: INIT_DATA,
    payload: initialData
});

export const appendData = (toAppend: RestApiData): IAppendDataAction => ({
    type: APPEND_DATA,
    payload: toAppend
});