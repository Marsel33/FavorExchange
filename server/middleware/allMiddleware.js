const idAndName = (req, res, next) => {
    res.locals.name = req.session?.name;
    res.locals.userId = req.session?.userid;
    console.log('REQ.SESSION ================>', req.session);
    console.log('REQ.SESSION.ID', req.session.id);
    console.log('RES LOCALS!!!===============>', res.locals);
    // console.log(res);
    next();
};

const userCheck = (req, res, next) => {
    if (req.session.name) {
        next();
    } else return res.redirect('/register');
};

const isOwner = (req, res, next) => {
    next();
};

module.exports = {idAndName, userCheck};
