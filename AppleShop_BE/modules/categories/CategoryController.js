

const categoryService = require('./CategoryService');

const get = async () =>{
    try{
        const categories = await categoryService.get();
        return categories;
    }catch(error){
        console.log(error);
    }
}

module.exports = { get };