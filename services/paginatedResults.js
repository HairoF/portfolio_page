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
    const startIndex = (req.params.page - 1) * limit;
    const endIndex = req.params.page * limit;
    req.limitedData = req.tableData.slice(startIndex,endIndex);
    console.log(req.limitedData)
    next()
}

module.exports = {paginatedResults, updatePage};