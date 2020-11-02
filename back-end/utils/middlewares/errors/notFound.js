const notFound = (req,res,next) => {

    const err = new Error("page not found")
    next(err);

}



module.exports = { notFound }