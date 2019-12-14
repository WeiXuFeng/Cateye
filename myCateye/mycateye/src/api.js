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
export const imgdetail=(id)=>{
    var id=id||'1238837'
    // console.log(id)
    return new Promise((resolve,reject)=>{
        let url= `/reander/ajax/detailmovie?movieId=${id}&optimus_uuid=5AC2B3C01CB111EAA218436989BF88279B2DB9BF88484F609D3FF1DB03F33127&optimus_risk_level=71&optimus_code=10`
        axios.get(url)
        .then(data2=>{
            resolve(data2)
        })
    
    })
}

export const address=()=>{
    return new Promise((resolve,reject)=>{
        let url= `/reander/ajax/cinemaList?day=2019-12-14&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1576312917604&cityId=1&optimus_uuid=1EC6A1C01D7311EA9AA1676460F552049B4975BD02324DD0AB79BBB0F71FB937&optimus_risk_level=71&optimus_code=10`
        axios.get(url)
        .then(data=>{
            resolve(data)
        })
    
    })
}



