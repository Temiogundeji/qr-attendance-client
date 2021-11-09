import { departmentAPI, catchApiRequestError, handleApiResponseError } from '../../shared';

export const fetchAllDepartments = (callback) => {
  return fetch(departmentAPI.GET_ALL_DEPARTMENTS)
    .then((response) => response.json())
    .then((json) => {
      const { data, status, status_code } = json;
      if (status === 'success') {
        if (callback.success) {
          callback.success(data);
        }
      } else if (status_code === 404 || (status_code === 200 && status === 'error')) {
        if (callback.empty) {
          callback.empty(handleApiResponseError(json));
        }
      } else {
        if (callback.error) {
          callback.error(handleApiResponseError(json));
        }
      }
    })
    .catch((error) => {
      if (callback.error) {
        callback.error(catchApiRequestError(error));
      }
    });
};
