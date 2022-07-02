import mongoose from "mongoose";

const DentalDiagnosisSchema = mongoose.Schema({
    icd10: String,
    diagnosis: String
}, {timestamps:true});

DentalDiagnosisSchema.index({
    icd10: "text",
    diagnosis: "text",
});

export const DentalDiagnosis = mongoose.model('dental_diagnosis', DentalDiagnosisSchema, "dental_diagnosis");