import { useCallback } from "react";
import { useDispatch,useSelector,shallowEqual } from "react-redux";
import { isimEkle,isimSil } from "../reducers/isimlerReducer";


export function useIsimler(){
    const dispatch = useDispatch();
    const {value} = useSelector(({isimler})=>{
        return{
            value:isimler.value
        };
    },shallowEqual);


    const boundIsimEkle = useCallback(
        (...args) =>dispatch(isimEkle(...args)),[dispatch]
    );


    const boundIsimSil = useCallback(
        (...args)=>dispatch(isimSil(...args)),[dispatch]
    );

    return{
        value,
        isimEkle:boundIsimEkle,
        isimSil:boundIsimSil
    }
}