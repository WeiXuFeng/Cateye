import axios from './unit/axios'
import jsonp from 'jsonp'

export const gitrecommend=()=>{
    return new Promise((resolve,reject)=>{
    let url='/reander/ajax/movieOnInfoList?token=&optimus_uuid=809C5DF01B0111EA9E3F830EEE398277153AF17649194A6195CDC4F31615349A&optimus_risk_level=71&optimus_code=10'
    axios.get(url)
    .then(data=>{
        resolve(data)
    })
})
}
export const gitExpect=()=>{
    return new Promise((resolve,reject)=>{
        let url='/reander/ajax/mostExpected?ci=20&limit=10&offset=0&token=&optimus_uuid=D57AED701BC211EA82481DADABB846CDF68957356969448595052C29A4897081&optimus_risk_level=71&optimus_code=10'
        axios.get(url)
        .then(data=>{
            resolve(data)
        })
    })
}
export const future=()=>{
    return new Promise((resolve,reject)=>{
        let url='/reander/ajax/comingList?ci=20&token=&limit=10&optimus_uuid=D57AED701BC211EA82481DADABB846CDF68957356969448595052C29A4897081&optimus_risk_level=71&optimus_code=10'
        axios.get(url)
        .then(data1=>{
            resolve(data1)
        })
    })
}






