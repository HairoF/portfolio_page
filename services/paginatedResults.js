function paginatedResults(req,res,next) {
    const dataArray = req.tableData;//array of objects
    const limit = 5;
    req.limitedData = dataArray.slice(0,limit);
    console.log('limited',req.limitedData);
    req.pages = Math.ceil(dataArray.length / limit);
    next()
}

module.exports = {paginatedResults};