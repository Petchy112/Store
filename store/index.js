export const state = () => ({
    list :[]
  })
  
  export const mutations = {
    set_array(state , newData){
      console.log('set_array',newData)
      state.list = newData
    },
    set_array(state , newData){
      state.list.push(newData)
    },
  }