import { issueJWT } from "../config/jwt.js"

export const getToken = (req, res) => {
    console.log(req.user);
    if(!req.user) return res.redirect("/login") 
    const token = issueJWT({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
    })
    return res.send(token);
}