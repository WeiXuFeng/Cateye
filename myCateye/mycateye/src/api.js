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








