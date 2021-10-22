function paginatedResults(req,res,next) {
    const dataArray = req.tableData;//array of objects
    const limit = 5;
    req.limitedData = dataArray.slice(0,limit);
    console.log('limited',req.limitedData);
    req.pages = Math.ceil(dataArray.length / limit);
    next()
}

function updatePage(req,res,next) {
    console.log('update page ',req.params.page)
    const limit = 5;
    let startIndex  = 1;
    let endIndex = 5;

        // switch(req.params.arrow){
        //     case 'prev':
        //         // startIndex = ((req.params.page - 2) * limit) >= 0 ? ((req.params.page - 1) * limit) : 0 // -2 instead -1
        //         // endIndex = req.params.page * limit;
        //         break;

        //     case 'next':
        //         break;

        //     default: 
                startIndex = ((req.params.page - 1) * limit) >= 0 ? ((req.params.page - 1) * limit) : 0;
                endIndex = req.params.page * limit;
        // }
    
    req.limitedData = req.tableData.slice(startIndex,endIndex);

    next()
}

module.exports = {paginatedResults, updatePage};