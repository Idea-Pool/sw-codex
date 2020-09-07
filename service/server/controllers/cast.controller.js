exports.castGet = async (req, res) => {
    res.send({
        cast: [
            {
                name: "Hello"
            }
        ]
    })
}