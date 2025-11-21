const validate = (schema) => async (req, res, next) => {
    try {
        await schema.validate(
            { body: req.body, params: req.params },
            { abortEarly: false }
        )
        return next();
    } catch (err) {
        res.status(400).json({ errors: err.errors })
    }
}

module.exports = validate;