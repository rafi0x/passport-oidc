import mongoose from "mongoose";

const MedicineSchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
    },
    // dar: {
    //     type: String,
    //     index: true,
    // },
    category: {
        type: String,
        index: true,
    },
    generic: {
        type: String,
        index: true,
    },
    company: {
        type: String,
        index: true,
    },
    // Price: String,
    dosage: {
        type: String,
        index: true,
    },
    useFor: {
        type: String,
        index: true,
    },
    SL: String
    
}, {timestamps:true});

MedicineSchema.index({ 
    name: "text",
    generic: "text",
    company: "text",
    usedFor: "text",
    // dar: "text",
    category: "text",
    // Strength: "text"
},{ language: "none" });

export const Medicine = mongoose.model('Medicine', MedicineSchema);