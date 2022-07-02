import mongoose from "mongoose";

const DoctorSchema = mongoose.Schema({
    docName: {
        type: String,
        index: true,
    },
    docImg: String,
    docRegNo: {
        type: String,
        index: true,
    },
    docType: {
        type: String,
        index: true,
    },
    docAddress: String 

}, {timestamps:true});

DoctorSchema.index({
    docName: "text",
    docRegNo: "text",
    docType: "text",
});

export const Doctor = mongoose.model('Doctor', DoctorSchema);