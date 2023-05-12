import mongoose from 'mongoose'
import app from './app.config' 
mongoose.connect('mongodb://localhost:27017/ts_practice').then(() => {
    console.log('🔋 db is connect')


    app.listen(4000, () => console.log('server is connect'))
})
