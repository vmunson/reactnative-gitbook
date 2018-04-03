import metrics from '../../../themes/config/metrics'
import commonColor from '../../../themes/commonColor';

export default {

    button: {
        flex: 1, 
        padding: 15, 
        margin: 10
    },
    buttons: {
        justifyContent: 'space-around', 
        flexDirection: 'row'
    },
    deletePhotoBtn: {
        backgroundColor: 'red'
    },
    takePhotoBtn: {
        backgroundColor: commonColor.brandColor
    },
    pickPhotoBtn: {
        backgroundColor: commonColor.buttonColor
    }
}