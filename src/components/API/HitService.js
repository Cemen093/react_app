export default class HitService {
  static async getRegions(){
    const response = await fetch(`http://127.0.0.1:3000/api/region/getAll`)
    return await response.json()
  }
  static async getHeadings(){
    const response = await fetch(`http://127.0.0.1:3000/api/heading/getAll`)
    return await response.json()
  }
  static async getAds(){
    const response = await fetch(`http://127.0.0.1:3000/api/NOT_ad/getAll`)
    return (await response.json()).filter(el => el.vip === true)
  }
}