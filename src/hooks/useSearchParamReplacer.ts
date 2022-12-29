import { useLocation } from 'react-router-dom';

const getSearchParamName = (param: string) => {
  return param.substring(
    param.indexOf('?') + 1,
    param.indexOf('=')
  )
}

export const useSearchParamReplacer = () => {
  const { search } = useLocation();

  return (newParam: string) => {

    let splitedSearch = search.split('?').slice(1);
    let searchWithoutOldParam = splitedSearch.filter(p => !getSearchParamName(p).includes(getSearchParamName(newParam)))
    let otherParams = searchWithoutOldParam.length === 0 ? searchWithoutOldParam.join('?') : ('?' + searchWithoutOldParam.join('?'));

    return otherParams.concat(newParam);
  }
}