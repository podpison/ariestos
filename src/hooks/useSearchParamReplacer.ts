import { useLocation } from 'react-router-dom';

const getSearchParamName = (param: string) => {
  return param.substring(
    param.indexOf('?') + 1,
    param.indexOf('=')
  )
}

export const useSearchParamReplacer = () => {
  const { search } = useLocation();

  return (newParam: string | string[]) => {
    let splitedSearch = search.split('?').slice(1);
    let newParamsInArray = typeof newParam === 'string' ? [newParam] : newParam;

    let searchWithoutOldParam = splitedSearch.filter(p => !newParamsInArray.some(np => getSearchParamName(np) === getSearchParamName(p)));
    let otherParams = searchWithoutOldParam.length === 0 ? searchWithoutOldParam.join('?') : ('?' + searchWithoutOldParam.join('?'));

    return otherParams.concat(newParamsInArray.join('?'));
  }
}