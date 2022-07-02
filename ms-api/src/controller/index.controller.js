import {DentalDiagnosis} from "../schema/dentalDiagnosis.model.js";

export default class {

    static index(req, res) {
        if(!req.session.data){
            return res.send("You need to login first");
        }
        return res.json(req.session.data);
    }

    static async getData(req, res) {
        const data = await DentalDiagnosis.find({});

        return res.json(data);
    }

    static async logout(req, res) {
        req.logout(function (err) {
            if (err) {
                return next(err);
            }
            res.redirect("/");
        });
    }

}