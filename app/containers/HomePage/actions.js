/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import restApi from 'utils/requestAxios';
import { CHANGE_USERNAME } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export async function changeUsername(name) {

    console.log('ddddddd88888888888888888888888888888888888');
    console.log(restApi);

    const aaa = await restApi(`/services/categories`, {});

    console.log(aaa);

    // export const fetchShippersReceivers = async (params) => {
    //     try {
    //         return await restApi(`/services/categories`, {params});
    //     } catch (e) {
    //         return {error: e.statusText};
    //     }
    // };

    return {
        type: CHANGE_USERNAME,
        name,
    };
}
