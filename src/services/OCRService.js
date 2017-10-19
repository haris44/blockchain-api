const fetch = require('node-fetch')
const FormData = require('form-data')
import Global from '../global'

export const OCRService = {

    sendToOCR(image) {

        const data = new FormData()
        data.append('file', image)

        // fetch(Global.back + '/image', {
        //     method: 'POST',
        //     body: data
        // }).then(() => {
        //     console.log('ok')
        // }).catch(err => console.error(err))
    }
}